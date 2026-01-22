import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header, Footer } from '../components/Layout';
import { useProjects } from '../hooks/useProjects';

interface ProjectDetailProps {
  slug: string;
}

const getEmbedUrl = (url: string) => {
  if (!url) return url;

  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split(/[?&]/)[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }

  if (url.includes('youtube.com/watch')) {
    const searchParams = url.split('?', 2)[1];
    const params = new URLSearchParams(searchParams);
    const videoId = params.get('v');
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }

  if (url.includes('loom.com/share/')) {
    return url.replace('loom.com/share/', 'loom.com/embed/');
  }

  return url;
};

const sanitizeHtml = (dirty: string) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return dirty;
  }

  const allowedTags = new Set([
    'p',
    'br',
    'ul',
    'ol',
    'li',
    'strong',
    'em',
    'b',
    'i',
    'u',
    'a',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'code',
    'pre',
    'span',
    'div',
  ]);

  const template = document.createElement('template');
  template.innerHTML = dirty;

  const sanitizeNode = (node: Node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      const tagName = element.tagName.toLowerCase();

      if (!allowedTags.has(tagName)) {
        const parent = element.parentNode;
        if (!parent) return;
        while (element.firstChild) {
          parent.insertBefore(element.firstChild, element);
        }
        parent.removeChild(element);
        return;
      }

      Array.from(element.attributes).forEach((attr) => {
        const name = attr.name.toLowerCase();
        if (name.startsWith('on')) {
          element.removeAttribute(attr.name);
          return;
        }

        if (name === 'href') {
          const href = element.getAttribute('href') || '';
          if (href.trim().toLowerCase().startsWith('javascript:')) {
            element.removeAttribute('href');
          }
          element.setAttribute('rel', 'noopener noreferrer');
          return;
        }

        if (name !== 'target' && name !== 'rel') {
          element.removeAttribute(attr.name);
        }
      });
    }

    Array.from(node.childNodes).forEach(sanitizeNode);
  };

  Array.from(template.content.childNodes).forEach(sanitizeNode);
  return template.innerHTML;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug }) => {
  const { projects, loading, error } = useProjects();
  const project = useMemo(() => projects.find((item) => item.slug === slug), [projects, slug]);
  const currentIndex = useMemo(() => projects.findIndex((item) => item.slug === slug), [projects, slug]);
  const heroImages = useMemo(() => {
    if (!project) return [] as string[];
    if (Array.isArray(project.heroImages) && project.heroImages.length > 0) {
      return project.heroImages.filter(Boolean);
    }
    return project.heroImage ? [project.heroImage] : [];
  }, [project]);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const nextProject = useMemo(() => {
    if (!projects.length || currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex];
  }, [currentIndex, projects]);
  const outcomes = useMemo(() => {
    if (!project?.outcomes) return [];
    return project.outcomes
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }, [project?.outcomes]);

  const sanitizedProblem = useMemo(
    () => (project?.problem ? sanitizeHtml(project.problem) : ''),
    [project?.problem],
  );

  const sanitizedSolution = useMemo(
    () => (project?.solution ? sanitizeHtml(project.solution) : ''),
    [project?.solution],
  );

  const sanitizedEngineeringChallenge = useMemo(
    () => (project?.engineeringChallenge ? sanitizeHtml(project.engineeringChallenge) : ''),
    [project?.engineeringChallenge],
  );

  const nextCaseStudyClasses = [
    'mt-12 block border border-[#333333]',
    'bg-transparent p-8 transition-colors duration-200',
    'hover:border-[#FF4F00]',
  ].join(' ');

  useEffect(() => {
    setCurrentHeroIndex(0);
  }, [project?.id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f] text-[#EAEAEA]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#333333] border-t-[#FF4F00]" />
          <p className="text-[#B4B4B4]">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-[#0f0f0f] px-6 text-[#EAEAEA]">
        <div className="max-w-lg border border-[#333333] p-10 text-center">
          <h1 className="text-2xl font-semibold text-[#EAEAEA]">Unable to load project</h1>
          <p className="mt-4 text-[#B4B4B4]">Please try again or return to the homepage.</p>
          <a
            href="/"
            className="btn-primary mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-[#0f0f0f] px-6 text-[#EAEAEA]">
        <div className="max-w-lg border border-[#333333] p-10 text-center">
          <h1 className="text-3xl font-bold">404 - Project Not Found</h1>
          <p className="mt-4 text-[#B4B4B4]">The case study you are looking for does not exist or has been moved.</p>
          <a
            href="/"
            className="btn-primary mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-[#EAEAEA]">
      <Header forceDarkBackground />
      <div className="relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 lg:pb-24 lg:pt-36">
          <a
            href="/#projects"
            className="mb-6 inline-flex items-center gap-2 pb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#B4B4B4] transition-colors hover:text-[#FF4F00] font-mono"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Back to Projects
          </a>

          <div className="mt-6 space-y-4">
            <h1 className="text-balance text-4xl font-bold leading-tight text-[#EAEAEA] md:text-5xl">{project.title}</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[#B4B4B4]">{project.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="border border-[#333333] px-4 py-2 text-sm font-semibold text-[#EAEAEA] font-mono uppercase tracking-[0.12em]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden border border-[#333333] bg-transparent">
            {project.demoVideoUrl && project.demoVideoUrl.startsWith('http') ? (
              <div className="aspect-[16/9] w-full">
                <iframe
                  src={getEmbedUrl(project.demoVideoUrl)}
                  title={`${project.title} demo`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : heroImages.length > 0 ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0f0f0f]">
                <img
                  src={heroImages[currentHeroIndex]}
                  alt={`${project.title} visual ${currentHeroIndex + 1}`}
                  className="h-full w-full object-cover"
                />
                {heroImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={() => setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 border border-[#333333] bg-[#0f0f0f] p-2 text-[#EAEAEA] transition hover:border-[#FF4F00] focus:outline-none focus:ring-2 focus:ring-[#FF4F00]"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={() => setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 border border-[#333333] bg-[#0f0f0f] p-2 text-[#EAEAEA] transition hover:border-[#FF4F00] focus:outline-none focus:ring-2 focus:ring-[#FF4F00]"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {heroImages.map((_, index) => (
                        <span
                          key={`hero-dot-${index}`}
                          className={`h-2.5 w-2.5 transition ${index === currentHeroIndex ? 'bg-[#FF4F00]' : 'bg-[#333333]'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex aspect-[16/9] items-center justify-center bg-[#1a1a1a] text-[#B4B4B4]">
                No media available
              </div>
            )}
          </div>

          {/* ACTION BAR - Insert this block */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
              >
                <span>Visit Live Site</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m-6-6L10 14" /></svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-dark inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>View Source</span>
              </a>
            )}
          </div>

          <div className="mt-14 grid gap-8 border border-[#333333] bg-transparent p-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="text-xl font-semibold text-[#EAEAEA]">The Challenge</h2>
              <div
                className="rich-text mt-4 text-base leading-relaxed text-[#B4B4B4]"
                dangerouslySetInnerHTML={{ __html: sanitizedProblem }}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#EAEAEA]">The Solution</h2>
              <div
                className="rich-text mt-4 text-base leading-relaxed text-[#B4B4B4]"
                dangerouslySetInnerHTML={{ __html: sanitizedSolution }}
              />
            </div>
          </div>

          {project.engineeringChallenge && (
            <div className="mt-10 border border-[#333333] bg-transparent p-8">
              <h2 className="text-xl font-semibold text-[#EAEAEA]">Engineering Challenge</h2>
              <div
                className="rich-text mt-4 text-base leading-relaxed text-[#B4B4B4]"
                dangerouslySetInnerHTML={{ __html: sanitizedEngineeringChallenge }}
              />
            </div>
          )}

          {project.architectureUrl && (
            <div className="mt-14 overflow-hidden border border-[#333333] bg-transparent">
              <div className="border-b border-[#333333] px-8 py-6">
                <h2 className="text-2xl font-semibold text-[#EAEAEA]">How It Works</h2>
                <p className="mt-2 text-[#B4B4B4]">System architecture and flow visualization.</p>
              </div>
              <div className="flex items-center justify-center bg-[#0f0f0f] p-6">
                <img
                  src={project.architectureUrl}
                  alt={`${project.title} architecture`}
                  className="max-h-[540px] w-full object-contain"
                  style={{ cursor: 'zoom-in' }}
                />
              </div>
            </div>
          )}

          {outcomes.length > 0 && (
            <div className="mt-10 border border-[#333333] bg-transparent px-6 py-6">
              <div className="flex items-center gap-2 text-base font-semibold text-[#EAEAEA] md:text-lg">
                <CheckCircle className="h-5 w-5 text-[#FF4F00]" aria-hidden />
                <h2 className="text-lg md:text-xl">Key Outcomes</h2>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                {outcomes.map((outcomeText, index) => (
                  <div
                    key={index}
                    className="flex h-full items-start gap-3 border border-[#333333] px-5 py-4"
                  >
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-[#333333] text-[#FF4F00]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base font-medium leading-relaxed text-[#B4B4B4]">{outcomeText}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {nextProject && (
            <a
              href={`/project/${nextProject.slug}`}
              className={nextCaseStudyClasses}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#FF4F00] font-mono">Next Case Study</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[#EAEAEA]">{nextProject.title}</h3>
                  <p className="mt-1 text-[#B4B4B4]">{nextProject.tagline}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center border border-[#333333] text-[#FF4F00]">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
