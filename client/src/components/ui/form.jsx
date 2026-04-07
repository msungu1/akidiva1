import { useForm } from "react-hook-form";
import { 
  Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RegistrationForm() {
  const form = useForm({
    defaultValues: { username: "" },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>
                Please enter the name as it appears on your ID.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-hospital-blue w-full">
          Complete Registration
        </Button>
      </form>
    </Form>
  );
}