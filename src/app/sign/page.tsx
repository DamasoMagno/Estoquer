"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const signSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type Sign = z.infer<typeof signSchema>;

export default function Sign() {
  const router = useRouter();
  const form = useForm<Sign>({
    resolver: zodResolver(signSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function logoutUser(e: any) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <div>
      <Form {...form}>
        <form
          className="h-screen flex justify-center items-center px-4 flex-col gap-4 max-w-md mx-auto"
          onSubmit={logoutUser}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input {...field} placeholder="Digite seu email" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input {...field} placeholder="Digite sua senha" />
                </FormControl>
              </FormItem>
            )}
          />

          <Button className="w-full">Realizar Login</Button>
        </form>
      </Form>
    </div>
  );
}
