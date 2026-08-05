import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="breadcrumb"
      className={cn("w-full", className)}
    >
      <ol
        className="flex flex-wrap items-center gap-1 text-sm text-slate-500"
        role="list"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1" role="listitem">
              {/* Chevron separator – skip for first item */}
              {index > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 text-slate-400 shrink-0"
                  aria-hidden="true"
                />
              )}

              {isLast || !item.href ? (
                /* Current page – not linked */
                <span
                  className={cn(
                    "font-medium leading-tight",
                    isLast ? "text-slate-900" : "text-slate-500"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                /* Ancestor page – linked */
                <Link
                  href={item.href}
                  className="font-medium text-slate-500 transition-colors duration-150 hover:text-blue-600 hover:underline underline-offset-2 leading-tight"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
