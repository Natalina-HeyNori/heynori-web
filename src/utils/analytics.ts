import { AnalyticsEvent } from '@/types'

// Analytics tracking function
export const trackEvent = (event: AnalyticsEvent) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.name, {
      ...event.properties,
      timestamp: event.timestamp || Date.now(),
    })
  }

  // Custom analytics endpoint
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }).catch(console.error)
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event)
  }
}

// Page view tracking
export const trackPageView = (path: string) => {
  trackEvent({
    name: 'page_view',
    properties: {
      path,
      title: document.title,
    },
  })
}

// Button click tracking
export const trackButtonClick = (buttonName: string, section?: string) => {
  trackEvent({
    name: 'button_click',
    properties: {
      button_name: buttonName,
      section,
    },
  })
}

// Form submission tracking
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent({
    name: 'form_submission',
    properties: {
      form_name: formName,
      success,
    },
  })
}

// Language change tracking
export const trackLanguageChange = (fromLanguage: string, toLanguage: string) => {
  trackEvent({
    name: 'language_change',
    properties: {
      from_language: fromLanguage,
      to_language: toLanguage,
    },
  })
}

// Performance tracking
export const trackPerformance = (metrics: {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
}) => {
  trackEvent({
    name: 'performance_metrics',
    properties: metrics,
  })
} 