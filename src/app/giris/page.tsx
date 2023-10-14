"use client";
import {
  LoginFormValues,
  LoginInputSchema,
} from "@/schemas/login/login-schema";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import useZodForm from "@/utils/hooks/use-zod-form";
import { useRouter } from "next/navigation";
import ButtonSpinner from "@/components/shared/ButtonSpinner";

type Props = {};

function GirisPage({}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useZodForm({
    schema: LoginInputSchema,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    // Handle form submission here, `data` will be of type LoginFormValues.
    console.log("submitted:", data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 2000);
  };

  console.log(form.formState.errors, "form.formState.errors");

  return (
    <div className='h-screen w-screen grid text-white place-content-center bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='text-black bg-white p-6 rounded-lg w-[300px] space-y-4'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='text-lg'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Email adresiniz...' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='Şifreniz..' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='tracking-wider text-lg w-full' type='submit'>
            {isLoading ? <ButtonSpinner /> : "Giriş yap"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default GirisPage;
