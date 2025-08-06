"use client";

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // Resetar formulário após envio
    setFormData({
      name: "",
      whatsapp: "",
      message: "",
    });

    // Fechar modal
    onClose();
  };

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");

    // Aplica a máscara (XX) XXXXX-XXXX
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }

    return value;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData((prev) => ({
      ...prev,
      whatsapp: formatted,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-card border border-white/20 rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Fale conosco
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/10 p-0"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2 text-left"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Nome completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-input-background border border-white/20 rounded-lg text-white placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="Seu nome completo"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-white mb-2 text-left"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              WhatsApp *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleWhatsAppChange}
              required
              className="w-full px-4 py-3 bg-input-background border border-white/20 rounded-lg text-white placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="(11) 99999-9999"
              maxLength={15}
              style={{ fontFamily: "DM Sans, sans-serif" }}
            />
          </div>

          {/* Mensagem */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-2 text-left"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-input-background border border-white/20 rounded-lg text-white placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
              placeholder="Conte-nos sobre seu projeto ou dúvida..."
              style={{ fontFamily: "DM Sans, sans-serif" }}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-white/20 text-white hover:bg-white/10"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 neon-green"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Enviar mensagem
            </Button>
          </div>
        </form>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p
            className="text-xs text-muted-foreground text-center"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Responderemos em até 2 horas úteis
          </p>
        </div>
      </div>
    </div>
  );
}
