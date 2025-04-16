
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { PenSquare } from "lucide-react";

const requestFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  description: z.string().min(10, { message: "Descrição deve ter pelo menos 10 caracteres" }),
});

type RequestFormValues = z.infer<typeof requestFormSchema>;

export function ProductRequestForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<RequestFormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  function onSubmit(data: RequestFormValues) {
    // Em um caso real, aqui você enviaria os dados para o Supabase
    console.log("Dados do formulário:", data);
    
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve para discutir seu pedido personalizado.",
    });
    
    form.reset();
    setIsOpen(false);
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 md:min-w-[280px]">
          <PenSquare className="h-4 w-4" />
          Não encontrou o que procura?
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[340px] p-5" align="center">
        <div className="space-y-4">
          <h3 className="font-playfair text-lg font-semibold text-luxury-black text-center">
            Solicite um Item Personalizado
          </h3>
          <p className="text-sm text-muted-foreground text-center">
            Não encontrou o que procura? Descreva o item que você está buscando.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu.email@exemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição do Item</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Descreva detalhes como tipo de peça, cor, material, tamanho, etc."
                        className="min-h-[80px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" variant="gold">
                Enviar Solicitação
              </Button>
            </form>
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
