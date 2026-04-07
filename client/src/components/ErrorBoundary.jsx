import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import React, { Component } from "react";

// 1. REMOVED: interface Props and interface State

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // 2. REMOVED: ": State" and ": Error"
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
          <AlertTriangle
            size={48}
            className="text-destructive mb-6 flex-shrink-0"
          />
          <h2 className="text-xl font-bold mb-2">An unexpected error occurred.</h2>
          <div className="max-w-md mb-6 p-4 bg-muted rounded-lg overflow-auto">
            <pre className="text-xs text-left whitespace-pre-wrap">
              {this.state.error?.message}
            </pre>
          </div>
          <button
            onClick={() => window.location.reload()}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg",
              "bg-primary text-primary-foreground",
              "hover:opacity-90 cursor-pointer"
            )}
          >
            <RotateCcw size={18} />
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;