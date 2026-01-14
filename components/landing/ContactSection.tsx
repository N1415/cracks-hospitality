'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactSection() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    telephone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.cracks-app.com/public/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company || undefined,
          telephone: formData.telephone || undefined,
          subject: `Interest: ${formData.interest}`,
          message: formData.message,
          source: 'hospitality',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          telephone: '',
          interest: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-muted/30 rounded-2xl p-8 lg:p-10 border border-border"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">{t('form.firstName')}</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">{t('form.lastName')}</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">{t('form.email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company">{t('form.company')}</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={status === 'sending'}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="telephone">{t('form.phone')}</Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                disabled={status === 'sending'}
              />
            </div>

            {/* Interest */}
            <div className="space-y-2">
              <Label htmlFor="interest">{t('form.interest')}</Label>
              <Select
                value={formData.interest}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, interest: value }))
                }
                disabled={status === 'sending'}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('form.interest')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studio">
                    {t('form.interestOptions.studio')}
                  </SelectItem>
                  <SelectItem value="app">
                    {t('form.interestOptions.app')}
                  </SelectItem>
                  <SelectItem value="both">
                    {t('form.interestOptions.both')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2 mt-6">
            <Label htmlFor="message">{t('form.message')}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              disabled={status === 'sending'}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-foreground text-background hover:bg-foreground/90"
              disabled={status === 'sending' || status === 'success'}
            >
              {status === 'sending' ? (
                <>
                  <span className="animate-pulse">{t('form.sending')}</span>
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  {t('form.success')}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  {t('form.submit')}
                </>
              )}
            </Button>

            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 mt-4 text-destructive">
                <AlertCircle className="h-5 w-5" />
                <span>{t('form.error')}</span>
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
