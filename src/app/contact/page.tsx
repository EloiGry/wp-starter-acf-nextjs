"use client"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"

interface FormData {
    name: string,
    email: string,
    object: string,
    message: string,
}

interface FormErrors {
    name?: string,
    email?: string,
    object?: string,
    message?: string,
}

export default function Contact() {
    const token = process.env.NEXT_PUBLIC_API_SECRET_TOKEN_FORM;
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        object: "",
        message: ""
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [globalErrorMessage, setGlobalErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true); // Désactiver le bouton

        const form = new FormData();
        form.append("your-name", formData.name);
        form.append("your-email", formData.email);
        form.append("your-subject", formData.object);
        form.append("your-message", formData.message);

        try {
            const response = await fetch("http://localhost:8881/wp-json/contact-form-7/v1/contact-forms/175/feedback", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: form,
            });

            const result = await response.json();

            if (!response.ok || result.status === "validation_failed") {
                // Affiche les erreurs globales
                if (result.message) {
                    setGlobalErrorMessage(result.message);
                }

                // Gère les erreurs spécifiques aux champs
                if (result.invalid_fields) {
                    const errors: FormErrors = {};
                    result.invalid_fields.forEach((fieldError: any) => {
                        if (fieldError.field === "your-name") {
                            errors.name = fieldError.message;
                        }
                        if (fieldError.field === "your-email") {
                            errors.email = fieldError.message;
                        }
                        if (fieldError.field === "your-subject") {
                            errors.object = fieldError.message;
                        }
                        if (fieldError.field === "your-message") {
                            errors.message = fieldError.message;
                        }
                    });
                    setFormErrors(errors);
                }

                throw new Error(result.message || "Erreur de validation");
            }

            // Si tout est correct
            setSuccessMessage("Votre message a bien été envoyé.");
            setGlobalErrorMessage(null);
            setFormErrors({}); // Réinitialiser les erreurs de validation
        } catch (error: any) {
            console.error("Error submitting form:", error);
            setGlobalErrorMessage(error.message || "Une erreur est survenue.");
            setSuccessMessage(null); // Réinitialiser le message de succès
        } finally {
            setIsSubmitting(false); // Réactiver le bouton
        }
    };

    return (
        <div className="flex py-8 fade-in">
            <Image
                src="/contactsvg.svg"
                alt="contactImage"
                width={0}
                height={0}
                className="hidden md:flex md:w-1/2 h-96"
            />
            <Card className="p-8 w-full max-w-[500px] flex flex-col gap-8">
                <CardTitle>Veuillez remplir ce formulaire</CardTitle>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Label> Nom 
                        <Input value={formData.name} type="text" name="name" id="name" placeholder="Nom" className="mt-1"
                            onChange={(event) => setFormData({
                                ...formData,
                                name: event.target.value
                            })}
                        />
                        {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
                    </Label>
                    <Label> Email 
                        <Input value={formData.email} type="email" name="email" id="email" placeholder="Email" className="mt-1"
                            onChange={(event) => setFormData({
                                ...formData,
                                email: event.target.value
                            })}
                        />
                        {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
                    </Label>
                    <Label> Objet 
                        <Input value={formData.object} type="text" name="object" id="object" placeholder="Objet" className="mt-1"
                            onChange={(event) => setFormData({
                                ...formData,
                                object: event.target.value
                            })}
                        />
                        {formErrors.object && <p className="text-red-500 mt-1">{formErrors.object}</p>}
                    </Label>
                    <Label> Message 
                        <Textarea value={formData.message} name="message" id="message" placeholder="Message" className="mt-1"
                            onChange={(event) => setFormData({
                                ...formData,
                                message: event.target.value
                            })}
                        />
                        {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
                    </Label>
                    {globalErrorMessage && <p className="text-red-500">{globalErrorMessage}</p>}
                    {successMessage && <p className="text-green-500">{successMessage}</p>}
                    <Button type="submit" disabled={isSubmitting}>Envoyer</Button>
                </form>
            </Card>
        </div>
    );
}