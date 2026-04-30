import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  path: string;
  description: string;
}

const allServices: Record<string, RelatedService> = {
  'ai-agent-development': {
    title: 'AI Agent Development',
    path: '/solutions/ai-agent-development',
    description: 'Custom conversational AI agents for chat, voice, and automation.'
  },
  'workflow-automation': {
    title: 'Workflow Automation',
    path: '/solutions/workflow-automation',
    description: 'End-to-end business process automation with API orchestration.'
  },
  'process-automation': {
    title: 'Process Automation',
    path: '/solutions/process-automation',
    description: 'RPA and AI-driven task automation for operational efficiency.'
  },
  'api-integrations': {
    title: 'API Integrations',
    path: '/solutions/api-integrations',
    description: 'Seamless system connectivity with secure API management.'
  },
  'custom-llm-systems': {
    title: 'Custom LLM Systems',
    path: '/solutions/custom-llm-systems',
    description: 'Fine-tuned large language models for domain-specific tasks.'
  },
  'software-development': {
    title: 'Software Development',
    path: '/solutions/software-development',
    description: 'Scalable custom software from SaaS to enterprise platforms.'
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    path: '/solutions/mobile-app-development',
    description: 'High-performance iOS and Android apps built to scale.'
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    path: '/solutions/cybersecurity',
    description: 'Comprehensive security audits, compliance, and risk management.'
  },
  'cloud-systems': {
    title: 'Cloud Systems',
    path: '/solutions/cloud-systems',
    description: 'Cloud infrastructure management across AWS, Azure, and hybrid.'
  },
  'data-management': {
    title: 'Data Management',
    path: '/solutions/data-management',
    description: 'Data pipelines, dashboards, and predictive analytics solutions.'
  }
};

const relatedMap: Record<string, string[]> = {
  'ai-agent-development': ['custom-llm-systems', 'workflow-automation', 'api-integrations'],
  'workflow-automation': ['process-automation', 'api-integrations', 'ai-agent-development'],
  'process-automation': ['workflow-automation', 'api-integrations', 'software-development'],
  'api-integrations': ['workflow-automation', 'software-development', 'cloud-systems'],
  'custom-llm-systems': ['ai-agent-development', 'data-management', 'software-development'],
  'software-development': ['mobile-app-development', 'api-integrations', 'cloud-systems'],
  'mobile-app-development': ['software-development', 'api-integrations', 'ai-agent-development'],
  'cybersecurity': ['cloud-systems', 'data-management', 'api-integrations'],
  'cloud-systems': ['cybersecurity', 'data-management', 'software-development'],
  'data-management': ['custom-llm-systems', 'cloud-systems', 'ai-agent-development']
};

interface RelatedSolutionsProps {
  currentSlug: string;
}

const RelatedSolutions = ({ currentSlug }: RelatedSolutionsProps) => {
  const relatedSlugs = relatedMap[currentSlug] || [];
  const related = relatedSlugs.map(slug => allServices[slug]).filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Solutions</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((service) => (
            <Link
              key={service.path}
              href={service.path}
              className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedSolutions;
