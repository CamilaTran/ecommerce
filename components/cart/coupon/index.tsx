import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { formSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import CancelIcon from '@/components/icons/cancel-icon';

const Coupon = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
    },
  });

  const onSubmit = () => {
    const random = Math.round(Math.random()) * 10;
    if (random % 2 === 0) {
    } else
      form.setError('code', {
        message: 'Please type coupon to add.',
        type: 'manually',
      });
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-neutral-700 text-sm">Coupon code</span>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
          <FormField
            control={form.control}
            name="code"
            render={({ field, fieldState }) => (
              <FormItem className="flex-1 gap-[6px]">
                <FormControl>
                  <Input
                    placeholder="Enter coupon code"
                    {...field}
                    variant={fieldState.error ? 'error' : 'default'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="shadow-btn !w-20 font-medium text-sm"
            variant="destructive"
            size="lg"
            type="submit"
          >
            Apply
          </Button>
        </form>
      </Form>
      {!Object.keys(form.formState.errors).length && form.getValues('code') && (
        <div className="flex px-[10px] py-1 bg-gray-200 rounded items-center w-fit gap-1">
          <span className="text-sm font-medium">{form.getValues('code')}</span>
          <Button
            variant="ghost"
            onClick={() => form.reset()}
            className="!h-fit !p-0"
          >
            <CancelIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Coupon;
