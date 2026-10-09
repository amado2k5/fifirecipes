import React from 'react';
import type { SupportedLanguage } from '../types';
import { getUIText } from '../data/translations';

interface ErrorBoundaryProps {
  lang: SupportedLanguage;
  children: React.ReactNode;
  /** Changing this value clears a shown error (e.g. when the visitor switches tab). */
  resetKey?: string;
}

interface ErrorBoundaryState {
  error: Error | null;
}

/**
 * Keeps a crash in one section (or a failed lazy chunk) from blanking the whole
 * page: shows a visible message with a retry button instead.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Section failed to render', error, info.componentStack);
  }

  componentDidUpdate(previous: ErrorBoundaryProps) {
    if (this.state.error && previous.resetKey !== this.props.resetKey) this.setState({ error: null });
  }

  render() {
    if (!this.state.error) return this.props.children;
    const { lang } = this.props;
    return (
      <div role="alert" className="text-center py-12 px-4 bg-white rounded-2xl border border-rose-200 text-rose-800 space-y-3">
        <p className="text-sm font-semibold">{getUIText(lang, 'sectionFailed')}</p>
        <button
          type="button"
          onClick={() => this.setState({ error: null })}
          className="px-4 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-800 text-white text-xs font-semibold transition-colors"
        >
          {getUIText(lang, 'retry')}
        </button>
      </div>
    );
  }
}
