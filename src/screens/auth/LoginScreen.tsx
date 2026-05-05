import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../store/auth.store";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Min 6 characters"),
});

type FormData = z.infer<typeof schema>;

export const LoginScreen = ({ navigation }: any) => {
  const { login, isLoading, error } = useAuthStore();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await login(data);
  };

  return (
    <View className="flex-1 bg-surface px-6 justify-center">
      <Text className="text-white text-3xl font-bold mb-2">Welcome back</Text>
      <Text className="text-muted mb-8">Log in to track your gains</Text>

      {error && (
        <View className="bg-red-900/40 rounded-lg p-3 mb-4">
          <Text className="text-red-400">{error}</Text>
        </View>
      )}

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <View className="mb-4">
            <TextInput
              className="bg-card text-white rounded-xl px-4 py-3 border border-card"
              placeholder="Username"
              placeholderTextColor="#6B7280"
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
            {errors.username && (
              <Text className="text-red-400 text-sm mt-1">{errors.username.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <View className="mb-6">
            <TextInput
              className="bg-card text-white rounded-xl px-4 py-3"
              placeholder="Password"
              placeholderTextColor="#6B7280"
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
            {errors.password && (
              <Text className="text-red-400 text-sm mt-1">{errors.password.message}</Text>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        className={`bg-primary rounded-xl py-4 items-center ${isLoading ? "opacity-50" : ""}`}
        onPress={handleSubmit(onSubmit)}
        disabled={isLoading}
      >
        <Text className="text-white font-semibold text-base">
          {isLoading ? "Logging in..." : "Log In"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4 items-center" onPress={() => navigation.navigate("Register")}>
        <Text className="text-muted">Don't have an account? <Text className="text-primary">Sign up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};