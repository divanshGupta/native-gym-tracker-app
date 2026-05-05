import { create } from "zustand";
import { workoutsApi } from "../api/workouts.api";
import type { Workout, CreateWorkoutPayload } from "../types/workout.types";

interface WorkoutState {
  workouts: Workout[];
  activeWorkout: Workout | null;
  isLoading: boolean;
  fetchWorkouts: () => Promise<void>;
  startWorkout: (data: CreateWorkoutPayload) => Promise<void>;
  finishWorkout: (id: string) => Promise<void>;
}

export const useWorkoutStore = create<WorkoutState>((set, get) => ({
  workouts: [],
  activeWorkout: null,
  isLoading: false,

  fetchWorkouts: async () => {
    set({ isLoading: true });
    const { data } = await workoutsApi.getAll();
    set({ workouts: data, isLoading: false });
  },

  startWorkout: async (payload) => {
    const { data } = await workoutsApi.create(payload);
    set({ activeWorkout: data });
  },

  finishWorkout: async (id) => {
    await workoutsApi.update(id, { completed_at: new Date().toISOString() });
    set({ activeWorkout: null });
    get().fetchWorkouts();
  },
}));