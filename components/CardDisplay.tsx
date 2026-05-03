"use client";

import { User, Building2, Mail, Phone, Globe, MapPin, BadgeCheck, FileText, Sparkles } from "lucide-react";

interface CardDisplayProps {
  data: {
    name?: string;
    designation?: string;
    company_name?: string;
    emails?: string[];
    phones?: string[];
    website?: string;
    address?: string;
    industry?: string;
    others?: string;
    card_type?: string;
  };
  imagePath?: string;
}

export default function CardDisplay({ data, imagePath }: CardDisplayProps) {
  return (
    <div className="card-display-container fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        
        {/* Card Data Panel */}
        <div className="glass-panel responsive-card">
          <div className="flex items-center gap-3 mb-8">
            <div className="logo-icon" style={{ background: data.card_type === 'Visiting' ? '#f59e0b15' : '#10b98115', color: data.card_type === 'Visiting' ? '#f59e0b' : '#10b981', flexShrink: 0, overflow: 'hidden' }}>
              <img src="/icons/visiting-card.png" alt="Card" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1e1b4b' }}>Extracted Details</h3>
            </div>
            <div style={{ marginLeft: 'auto', background: data.card_type === 'Visiting' ? '#f59e0b15' : '#10b98115', color: data.card_type === 'Visiting' ? '#f59e0b' : '#10b981', padding: '4px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: '800', border: '1px solid currentColor' }}>
              {data.card_type?.toUpperCase() || 'CARD'}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <DetailItem icon={User} label="Name" value={data.name} />
            <DetailItem icon={BadgeCheck} label="Designation" value={data.designation} />
            <DetailItem icon={Building2} label="Company" value={data.company_name} />
            <DetailItem icon={Sparkles} label="Industry" value={data.industry} />
            <DetailItem icon={Mail} label="Emails" value={data.emails?.join(", ")} />
            <DetailItem icon={Phone} label="Phones" value={data.phones?.join(", ")} />
            <DetailItem icon={Globe} label="Website" value={data.website} />
            <DetailItem icon={MapPin} label="Address" value={data.address} />
            <DetailItem icon={FileText} label="Others" value={data.others} />
          </div>
        </div>

        {/* Card Image Panel */}
        {imagePath && (
          <div className="glass-panel responsive-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="flex justify-between items-center">
              <h4 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-muted)' }}>ORIGINAL IMAGE</h4>
              <a href={imagePath} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>View Full Size</a>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: '16px', overflow: 'hidden', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
              <img src={imagePath} alt="Card" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .card-display-container {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

function DetailItem({ icon: Icon, label, value }: { icon: any, label: string, value?: string }) {
  if (!value) return null;
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', flexShrink: 0 }}>
        <Icon size={18} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
        <span style={{ fontSize: '15px', fontWeight: '700', color: '#1e1b4b' }}>{value}</span>
      </div>
    </div>
  );
}
