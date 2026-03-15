import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient.js';

const formSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  age: z.coerce.number({ invalid_type_error: 'Age must be a number' }).min(18, 'Must be at least 18 years old'),
  discordUsername: z.string().min(1, 'Discord Username is required'),
  yearsExperience: z.coerce.number({ invalid_type_error: 'Must be a number' }).min(1, 'Minimum 1 year experience required'),
  whyJoin: z.string().min(1, 'Please explain why you want to join'),
  understanding: z.string().min(1, 'Please answer the understanding question'),
  scenario: z.string().min(100, 'Scenario response must be at least 100 characters'),
  banHistory: z.string().optional(),
  timezone: z.string().min(1, 'Timezone is required'),
  agreeRules: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to follow server rules' }),
  }),
});

const departmentQuestions = {
  LSPD: {
    understanding: 'What is the primary role of the Los Santos Police Department in the city?',
    scenario: 'You witness a 10-80 (vehicle pursuit) initiating in downtown Los Santos. What are your first steps and how do you communicate on radio?',
  },
  BCSO: {
    understanding: 'How does rural patrol in Blaine County differ from city patrol?',
    scenario: 'You find an abandoned vehicle on a dirt road in Sandy Shores with visible contraband inside. Walk us through your scene management.',
  },
  SAST: {
    understanding: 'What is the primary jurisdiction and focus of the San Andreas State Troopers?',
    scenario: 'A major multi-vehicle collision blocks both lanes of Route 68. How do you secure the scene, manage traffic, and coordinate with other agencies?',
  },
  SAFD: {
    understanding: 'Explain the triage process in a mass casualty incident.',
    scenario: 'You arrive first on scene at a structure fire with potential occupants trapped inside. Describe your initial size-up and immediate actions.',
  },
};

const ApplicationForm = ({ department }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const questions = departmentQuestions[department] || {
    understanding: 'Describe your understanding of this department.',
    scenario: 'Provide a detailed response to a standard operational scenario for this department.',
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      age: '',
      discordUsername: '',
      yearsExperience: '',
      whyJoin: '',
      understanding: '',
      scenario: '',
      banHistory: '',
      timezone: '',
      agreeRules: false,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // Map the extended form fields to the existing database schema
      const experienceText = `Years Experience: ${data.yearsExperience}\nTimezone: ${data.timezone}\nBan History: ${data.banHistory || 'None'}`;
      const specificAnswerText = `Understanding:\n${data.understanding}\n\nScenario:\n${data.scenario}`;

      await pb.collection('applications').create({
        department,
        fullName: data.fullName,
        age: data.age,
        discordUsername: data.discordUsername,
        experience: experienceText,
        whyJoin: data.whyJoin,
        departmentSpecificAnswer: specificAnswerText,
      }, { $autoCancel: false });

      toast({
        title: 'Application submitted successfully',
        description: `Your ${department} application has been received. We'll review it soon.`,
      });

      reset();
    } catch (error) {
      toast({
        title: 'Submission failed',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-foreground">Full Name <span className="text-destructive">*</span></Label>
          <Input
            id="fullName"
            {...register('fullName')}
            className={`bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-all duration-200 ${errors.fullName ? 'border-destructive focus:border-destructive' : ''}`}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
        </div>

        {/* Age */}
        <div className="space-y-2">
          <Label htmlFor="age" className="text-foreground">Age <span className="text-destructive">*</span></Label>
          <Input
            id="age"
            type="number"
            {...register('age')}
            className={`bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-all duration-200 ${errors.age ? 'border-destructive focus:border-destructive' : ''}`}
            placeholder="Enter your age"
          />
          {errors.age && <p className="text-sm text-destructive">{errors.age.message}</p>}
        </div>

        {/* Discord Username */}
        <div className="space-y-2">
          <Label htmlFor="discordUsername" className="text-foreground">Discord Username <span className="text-destructive">*</span></Label>
          <Input
            id="discordUsername"
            {...register('discordUsername')}
            className={`bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-all duration-200 ${errors.discordUsername ? 'border-destructive focus:border-destructive' : ''}`}
            placeholder="username#0000 or @username"
          />
          {errors.discordUsername && <p className="text-sm text-destructive">{errors.discordUsername.message}</p>}
        </div>

        {/* Timezone */}
        <div className="space-y-2">
          <Label htmlFor="timezone" className="text-foreground">Timezone <span className="text-destructive">*</span></Label>
          <Controller
            name="timezone"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={`bg-input border-primary/30 text-foreground ${errors.timezone ? 'border-destructive focus:border-destructive' : ''}`}>
                  <SelectValue placeholder="Select your timezone" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-primary/30 text-foreground">
                  <SelectItem value="EST">Eastern Time (EST/EDT)</SelectItem>
                  <SelectItem value="CST">Central Time (CST/CDT)</SelectItem>
                  <SelectItem value="MST">Mountain Time (MST/MDT)</SelectItem>
                  <SelectItem value="PST">Pacific Time (PST/PDT)</SelectItem>
                  <SelectItem value="GMT">Greenwich Mean Time (GMT)</SelectItem>
                  <SelectItem value="CET">Central European Time (CET)</SelectItem>
                  <SelectItem value="AEST">Australian Eastern Time (AEST)</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.timezone && <p className="text-sm text-destructive">{errors.timezone.message}</p>}
        </div>

        {/* Years Experience */}
        <div className="space-y-2">
          <Label htmlFor="yearsExperience" className="text-foreground">Years of RP Experience <span className="text-destructive">*</span></Label>
          <Input
            id="yearsExperience"
            type="number"
            {...register('yearsExperience')}
            className={`bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-all duration-200 ${errors.yearsExperience ? 'border-destructive focus:border-destructive' : ''}`}
            placeholder="Minimum 1 year"
          />
          {errors.yearsExperience && <p className="text-sm text-destructive">{errors.yearsExperience.message}</p>}
        </div>

        {/* Ban History */}
        <div className="space-y-2">
          <Label htmlFor="banHistory" className="text-foreground">Server Ban History (Optional)</Label>
          <Input
            id="banHistory"
            {...register('banHistory')}
            className="bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-all duration-200"
            placeholder="List any previous bans or type 'None'"
          />
        </div>
      </div>

      {/* Why Join */}
      <div className="space-y-2">
        <Label htmlFor="whyJoin" className="text-foreground">Why do you want to join {department}? <span className="text-destructive">*</span></Label>
        <Textarea
          id="whyJoin"
          {...register('whyJoin')}
          rows={3}
          className={`bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-all duration-200 resize-none ${errors.whyJoin ? 'border-destructive focus:border-destructive' : ''}`}
          placeholder="Tell us about your motivations..."
        />
        {errors.whyJoin && <p className="text-sm text-destructive">{errors.whyJoin.message}</p>}
      </div>

      {/* Department Understanding */}
      <div className="space-y-2">
        <Label htmlFor="understanding" className="text-foreground">{questions.understanding} <span className="text-destructive">*</span></Label>
        <Textarea
          id="understanding"
          {...register('understanding')}
          rows={3}
          className={`bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-all duration-200 resize-none ${errors.understanding ? 'border-destructive focus:border-destructive' : ''}`}
          placeholder="Your understanding..."
        />
        {errors.understanding && <p className="text-sm text-destructive">{errors.understanding.message}</p>}
      </div>

      {/* Department Scenario */}
      <div className="space-y-2">
        <Label htmlFor="scenario" className="text-foreground">{questions.scenario} <span className="text-destructive">*</span></Label>
        <Textarea
          id="scenario"
          {...register('scenario')}
          rows={5}
          className={`bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-all duration-200 resize-none ${errors.scenario ? 'border-destructive focus:border-destructive' : ''}`}
          placeholder="Provide a detailed response (minimum 100 characters)..."
        />
        {errors.scenario && <p className="text-sm text-destructive">{errors.scenario.message}</p>}
      </div>

      {/* Agree to Rules */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center space-x-2">
          <Controller
            name="agreeRules"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="agreeRules"
                checked={field.value}
                onCheckedChange={field.onChange}
                className={`border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ${errors.agreeRules ? 'border-destructive' : ''}`}
              />
            )}
          />
          <Label htmlFor="agreeRules" className="text-foreground font-medium cursor-pointer">
            I agree to follow all Midnight City RP server rules and guidelines. <span className="text-destructive">*</span>
          </Label>
        </div>
        {errors.agreeRules && <p className="text-sm text-destructive">{errors.agreeRules.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
      >
        {loading ? 'Submitting Application...' : 'Submit Application'}
      </Button>
    </form>
  );
};

export default ApplicationForm;
