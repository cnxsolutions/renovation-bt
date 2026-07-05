"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Erreur serveur");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
        <h3 className="mb-2 text-xl font-bold text-gray-900">Message envoyé !</h3>
        <p className="text-gray-600">
          Nous vous recontacterons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "error" && (
        <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />
          <p className="text-sm text-red-700">
            Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
          </p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-700">
            Nom *
          </label>
          <input
            id="lastName"
            type="text"
            {...register("lastName", { required: "Ce champ est requis" })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="Votre nom"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-700">
            Prénom *
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName", { required: "Ce champ est requis" })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="Votre prénom"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Ce champ est requis",
              pattern: { value: /^\S+@\S+$/i, message: "Email invalide" },
            })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="votre@email.fr"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
            Téléphone *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone", { required: "Ce champ est requis" })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="06 XX XX XX XX"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700">
            Service souhaité
          </label>
          <select
            id="service"
            {...register("service")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          >
            <option value="">Sélectionnez un service</option>
            <option value="toiture">Toiture</option>
            <option value="facade">Façade</option>
            <option value="gouttiere">Gouttière</option>
            <option value="nettoyage">Nettoyage & Démoussage</option>
            <option value="zinguerie">Zinguerie</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-700">
            Ville
          </label>
          <input
            id="city"
            type="text"
            {...register("city")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="Votre ville"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "Ce champ est requis" })}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          placeholder="Décrivez votre projet ou votre besoin..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          "Envoi en cours..."
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Envoyer le message
          </>
        )}
      </Button>
    </form>
  );
}
