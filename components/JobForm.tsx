"use client";

import { useState, useEffect } from "react";
import {
  Building2,
  MapPin,
  Clock,
  IndianRupee,
  Briefcase,
  Globe,
  Save,
  Edit3,
  Loader2,
  Sparkles,
  Gift,
  Award,
  User,
  Phone,
  BarChart,
  Lightbulb,
  Zap
} from "lucide-react";

interface JobFormProps {
  initialData: any;
  onSave: (updatedData: any) => void;
}

export default function JobForm({ initialData, onSave }: JobFormProps) {
  const [formData, setFormData] = useState({
    company_name: "",
    job_role: "",
    location: "",
    duration: "",
    stipend: "",
    salary: "",
    mode: "",
    benefits: "",
    skills: "",
    hr_name: "",
    hr_phone: "",
    experience: "",
    qualification: ""
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        company_name: initialData.company_name || initialData.companyName || initialData.company || "",
        job_role: initialData.job_role || initialData.jobRole || initialData.role || "",
        location: initialData.location || "",
        duration: initialData.duration || initialData.time || "",
        stipend: initialData.stipend || "",
        salary: initialData.salary || "",
        mode: initialData.mode || initialData.work_mode || initialData.workMode || "",
        benefits: initialData.benefits || "",
        skills: initialData.skills || "",
        hr_name: initialData.hr_name || "",
        hr_phone: initialData.hr_phone || "",
        experience: initialData.experience || "",
        qualification: initialData.qualification || ""
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="glass-panel responsive-card" style={{ padding: '40px' }}>
      <div className="flex items-center gap-4 mb-10">
        <div className="logo-icon" style={{ width: '56px', height: '56px', borderRadius: '16px', flexShrink: 0, background: 'linear-gradient(135deg, var(--primary), #6366f1)' }}>
          <Edit3 size={28} color="white" />
        </div>
        <div>
          <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#1e1b4b', lineHeight: '1.2' }}>Finalize Job Post</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>Review and refine the details below.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Basic Info Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: '5px', height: '24px', background: 'var(--primary)', borderRadius: '10px' }}></div>
            <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#1e1b4b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Basic Information</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ columnGap: '40px', rowGap: '24px' }}>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <Building2 size={16} className="text-primary" />
                <span>COMPANY NAME</span>
              </label>
              <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} className="input-field" placeholder="e.g., Manvian" required />
            </div>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <Briefcase size={16} className="text-primary" />
                <span>JOB ROLE</span>
              </label>
              <input type="text" name="job_role" value={formData.job_role} onChange={handleChange} className="input-field" placeholder="e.g., Full Stack Developer" required />
            </div>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <MapPin size={16} className="text-primary" />
                <span>LOCATION</span>
              </label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} className="input-field" placeholder="e.g., Bangalore, India" />
            </div>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <Globe size={16} className="text-primary" />
                <span>WORK MODE</span>
              </label>
              <div style={{ position: 'relative' }}>
                <select name="mode" value={formData.mode} onChange={handleChange} className="input-field appearance-none" style={{ background: 'white' }}>
                  <option value="">Select Mode</option>
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Work from Home">Work from Home</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation & Duration Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: '5px', height: '24px', background: 'var(--primary)', borderRadius: '10px' }}></div>
            <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#1e1b4b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Compensation & Timeline</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ columnGap: '32px', rowGap: '24px' }}>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <Clock size={16} className="text-primary" />
                <span>DURATION</span>
              </label>
              <input type="text" name="duration" value={formData.duration} onChange={handleChange} className="input-field" placeholder="e.g., 6 Months" />
            </div>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <Zap size={16} className="text-primary" />
                <span>STIPEND</span>
              </label>
              <input type="text" name="stipend" value={formData.stipend} onChange={handleChange} className="input-field" placeholder="For Internships" />
            </div>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <IndianRupee size={16} className="text-primary" />
                <span>FULL SALARY</span>
              </label>
              <input type="text" name="salary" value={formData.salary} onChange={handleChange} className="input-field" placeholder="For Full-time" />
            </div>
          </div>
        </section>

        {/* Requirements & Benefits Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: '5px', height: '24px', background: 'var(--primary)', borderRadius: '10px' }}></div>
            <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#1e1b4b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Requirements & Perks</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ columnGap: '40px', rowGap: '24px' }}>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <Award size={16} className="text-primary" />
                <span>QUALIFICATION</span>
              </label>
              <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} className="input-field" placeholder="e.g., B.Tech, MCA" />
            </div>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <BarChart size={16} className="text-primary" />
                <span>EXPERIENCE</span>
              </label>
              <input type="text" name="experience" value={formData.experience} onChange={handleChange} className="input-field" placeholder="e.g., Fresher or 2+ years" />
            </div>
            <div className="space-y-3 md:col-span-2">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <Lightbulb size={16} className="text-primary" />
                <span>KEY SKILLS</span>
              </label>
              <input type="text" name="skills" value={formData.skills} onChange={handleChange} className="input-field" placeholder="e.g., React, Node.js, SQL" />
            </div>
            <div className="space-y-3 md:col-span-2">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <Gift size={16} className="text-primary" />
                <span>BENEFITS</span>
              </label>
              <textarea name="benefits" value={formData.benefits} onChange={handleChange} className="input-field" placeholder="e.g., Free meals, Insurance, Cabs" style={{ height: '100px', resize: 'none', padding: '16px' }} />
            </div>
          </div>
        </section>

        {/* HR Contact Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: '5px', height: '24px', background: 'var(--primary)', borderRadius: '10px' }}></div>
            <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#1e1b4b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>HR Contact Details</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ columnGap: '40px', rowGap: '24px' }}>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <User size={16} className="text-primary" />
                <span>CONTACT PERSON</span>
              </label>
              <input type="text" name="hr_name" value={formData.hr_name} onChange={handleChange} className="input-field" placeholder="Name of HR" />
            </div>
            <div className="space-y-3">
              <label className="data-label flex items-center gap-2.5 font-bold text-slate-700">
                <Phone size={16} className="text-primary" />
                <span>CONTACT NUMBER</span>
              </label>
              <input type="text" name="hr_phone" value={formData.hr_phone} onChange={handleChange} className="input-field" placeholder="Number for inquiries" />
            </div>
          </div>
        </section>

        <div style={{ marginTop: '56px' }}>
          <button type="submit" disabled={saving} className="btn-primary w-full shadow-xl" style={{ padding: '20px', borderRadius: '16px', fontSize: '16px', fontWeight: '800' }}>
            {saving ? (
              <>
                <Loader2 className="animate-spin" size={24} />
                <span>SAVING POST DATA...</span>
              </>
            ) : (
              <>
                <Save size={24} />
                <span style={{ letterSpacing: '0.1em' }}>GENERATE & SAVE POST</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
