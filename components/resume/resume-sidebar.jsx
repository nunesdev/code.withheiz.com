"use client";

import { ResumeDownloadButton } from "@/components/resume/resume-download-button";
import {
  ResumeSidebarNav,
  scrollToResumeSection,
} from "@/components/resume/resume-sidebar-nav";

const stickyPanelClass =
  "sticky top-24 flex h-fit max-h-[calc(100vh-6rem)] flex-col justify-between";

export function ResumeSidebar({
  navLabel,
  navItems,
  activeId,
  downloadLabel,
}) {
  return (
    <aside className="hidden lg:block lg:self-stretch" aria-label={navLabel}>
      <div className={stickyPanelClass}>
        <ResumeSidebarNav
          items={navItems}
          activeId={activeId}
          onNavigate={scrollToResumeSection}
        />
        <div className="pt-8">
          <ResumeDownloadButton label={downloadLabel} />
        </div>
      </div>
    </aside>
  );
}

export function ResumeMobileNav({
  navItems,
  activeId,
  downloadLabel,
}) {
  return (
    <div className="mb-10 space-y-4 border-b border-border pb-6 lg:hidden">
      <ResumeSidebarNav
        items={navItems}
        activeId={activeId}
        onNavigate={scrollToResumeSection}
        orientation="horizontal"
      />
      <ResumeDownloadButton label={downloadLabel} />
    </div>
  );
}