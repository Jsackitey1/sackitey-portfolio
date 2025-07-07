import { AnalyticsEvent } from '../types';

interface GTMDataLayer {
  event: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer: GTMDataLayer[];
    gtag?: (...args: unknown[]) => void;
  }
}

class Analytics {
  private isInitialized = false;
  private isDevelopment = import.meta.env.DEV;
  private trackingId?: string;

  init(trackingId?: string) {
    if (this.isDevelopment || this.isInitialized || !trackingId) {
      return;
    }

    this.trackingId = trackingId;

    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    this.isInitialized = true;
  }

  trackEvent({ action, category, label, value }: AnalyticsEvent) {
    if (this.isDevelopment) {
      console.log('Analytics Event:', { action, category, label, value });
      return;
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  trackPageView(path: string, title?: string) {
    if (this.isDevelopment) {
      console.log('Page View:', { path, title });
      return;
    }

    if (typeof window !== 'undefined' && window.gtag && this.trackingId) {
      window.gtag('config', this.trackingId, {
        page_path: path,
        page_title: title || document.title
      });
    }
  }

  trackDownload(fileName: string) {
    this.trackEvent({
      action: 'download',
      category: 'engagement',
      label: fileName
    });
  }

  trackProjectView(projectName: string) {
    this.trackEvent({
      action: 'project_view',
      category: 'portfolio',
      label: projectName
    });
  }

  trackContactFormSubmission() {
    this.trackEvent({
      action: 'form_submit',
      category: 'contact',
      label: 'contact_form'
    });
  }

  trackSocialClick(platform: string) {
    this.trackEvent({
      action: 'social_click',
      category: 'engagement',
      label: platform
    });
  }

  trackThemeToggle(theme: string) {
    this.trackEvent({
      action: 'theme_toggle',
      category: 'ui',
      label: theme
    });
  }

  trackBlogRead(articleTitle: string) {
    this.trackEvent({
      action: 'blog_read',
      category: 'content',
      label: articleTitle
    });
  }

  trackTimeOnPage(seconds: number) {
    this.trackEvent({
      action: 'time_on_page',
      category: 'engagement',
      value: Math.round(seconds)
    });
  }
}

export const analytics = new Analytics();

// Hook for React components
export const useAnalytics = () => {
  return {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackDownload: analytics.trackDownload.bind(analytics),
    trackProjectView: analytics.trackProjectView.bind(analytics),
    trackContactFormSubmission: analytics.trackContactFormSubmission.bind(analytics),
    trackSocialClick: analytics.trackSocialClick.bind(analytics),
    trackThemeToggle: analytics.trackThemeToggle.bind(analytics),
    trackBlogRead: analytics.trackBlogRead.bind(analytics),
    trackTimeOnPage: analytics.trackTimeOnPage.bind(analytics)
  };
};