import { CheckCircle, Loader2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInFormSchema = z.object({
  email: z.string().email(),
})

type signInFormType = z.infer<typeof signInFormSchema>

export function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<signInFormType>()

  const handleSignIn = async (data: signInFormType) => {
    try {
      if (!data.email.length) throw new Error('Preencha o campo de E-mail')

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        icon: <CheckCircle className="h-5 w-5 text-green-600" />,
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) toast.info(error.message)
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form
            className="gap-4 space-y-4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                'Acessar painel'
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
