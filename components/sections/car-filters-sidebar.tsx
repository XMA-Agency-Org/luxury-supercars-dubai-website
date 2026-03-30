"use client"

import { useState, useRef, useEffect } from "react"
import { SlidersHorizontal, X, ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { carCategories } from "@/app/(home)/_lib/car-data"
import { brands } from "@/app/(home)/_lib/brand-data"
import { cn } from "@/lib/utils"

type PriceRange = {
  label: string
  min: number
  max: number | null
}

const priceRanges: PriceRange[] = [
  { label: "Under AED 2,000", min: 0, max: 2000 },
  { label: "AED 2,000 - 4,000", min: 2000, max: 4000 },
  { label: "AED 4,000 - 8,000", min: 4000, max: 8000 },
  { label: "AED 8,000+", min: 8000, max: null },
]

type Filters = {
  category: string | null
  brand: string | null
  priceRange: PriceRange | null
}

type CarFiltersSidebarProps = {
  onFiltersChange: (filters: Filters) => void
  initialCategory?: string | null
  initialBrand?: string | null
  showCategories?: boolean
  showBrands?: boolean
  className?: string
}

function CarFiltersSidebar({
  onFiltersChange,
  initialCategory = null,
  initialBrand = null,
  showCategories = true,
  showBrands = true,
  className,
}: CarFiltersSidebarProps) {
  const [category, setCategory] = useState<string | null>(initialCategory)
  const [brand, setBrand] = useState<string | null>(initialBrand)
  const [priceRange, setPriceRange] = useState<PriceRange | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [brandOpen, setBrandOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)

  function updateFilters(
    newCategory: string | null,
    newBrand: string | null,
    newPriceRange: PriceRange | null
  ) {
    setCategory(newCategory)
    setBrand(newBrand)
    setPriceRange(newPriceRange)
    onFiltersChange({
      category: newCategory,
      brand: newBrand,
      priceRange: newPriceRange,
    })
  }

  function clearFilters() {
    updateFilters(initialCategory, initialBrand, null)
  }

  const hasActiveFilters =
    category !== initialCategory || brand !== initialBrand || priceRange !== null

  const selectedBrandLabel = brand
    ? brands.find(
        (b) => b.name.toLowerCase().replace(/ /g, "-") === brand
      )?.name ?? "All Brands"
    : "All Brands"

  const selectedPriceLabel = priceRange?.label ?? "Any Price"

  const filterContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-primary-500" />
          <h3 className="font-heading text-lg font-semibold">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary-500 hover:text-primary-400"
          >
            Clear all
          </button>
        )}
      </div>

      {showCategories && (
        <FilterGroup title="Car Type">
          <button
            onClick={() => updateFilters(null, brand, priceRange)}
            className={cn(
              "block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
              category === null
                ? "bg-primary-500/10 text-primary-500"
                : "text-neutral-500 hover:text-neutral-50"
            )}
          >
            All Types
          </button>
          {carCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => updateFilters(cat.slug, brand, priceRange)}
              className={cn(
                "block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                category === cat.slug
                  ? "bg-primary-500/10 text-primary-500"
                  : "text-neutral-500 hover:text-neutral-50"
              )}
            >
              {cat.name}
            </button>
          ))}
        </FilterGroup>
      )}

      {showBrands && (
        <FilterDropdown
          title="Brand"
          selectedLabel={selectedBrandLabel}
          isOpen={brandOpen}
          onToggle={() => {
            setBrandOpen(!brandOpen)
            setPriceOpen(false)
          }}
          onClose={() => setBrandOpen(false)}
          hasSelection={brand !== null}
        >
          <DropdownOption
            isSelected={brand === null}
            onSelect={() => {
              updateFilters(category, null, priceRange)
              setBrandOpen(false)
            }}
          >
            All Brands
          </DropdownOption>
          {brands.map((b) => {
            const brandSlug = b.name.toLowerCase().replace(/ /g, "-")
            return (
              <DropdownOption
                key={b.name}
                isSelected={brand === brandSlug}
                onSelect={() => {
                  updateFilters(category, brandSlug, priceRange)
                  setBrandOpen(false)
                }}
              >
                {b.name}
              </DropdownOption>
            )
          })}
        </FilterDropdown>
      )}

      <FilterDropdown
        title="Daily Price"
        selectedLabel={selectedPriceLabel}
        isOpen={priceOpen}
        onToggle={() => {
          setPriceOpen(!priceOpen)
          setBrandOpen(false)
        }}
        onClose={() => setPriceOpen(false)}
        hasSelection={priceRange !== null}
      >
        <DropdownOption
          isSelected={priceRange === null}
          onSelect={() => {
            updateFilters(category, brand, null)
            setPriceOpen(false)
          }}
        >
          Any Price
        </DropdownOption>
        {priceRanges.map((range) => (
          <DropdownOption
            key={range.label}
            isSelected={priceRange?.label === range.label}
            onSelect={() => {
              updateFilters(category, brand, range)
              setPriceOpen(false)
            }}
          >
            {range.label}
          </DropdownOption>
        ))}
      </FilterDropdown>
    </div>
  )

  return (
    <>
      <div className="lg:hidden mb-4">
        <Button
          intent="secondary"
          size="md"
          onClick={() => setIsMobileOpen(true)}
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-neutral-950/80"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-surface border-l border-neutral-800 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold">Filters</h2>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-neutral-500 hover:text-neutral-50"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}

      <aside
        className={cn(
          "hidden lg:block lg:sticky lg:top-28 lg:self-start",
          className
        )}
      >
        <div className="rounded-2xl border border-neutral-800 bg-surface p-6">
          {filterContent}
        </div>
      </aside>
    </>
  )
}

function FilterGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
        {title}
      </h4>
      <div className="space-y-1">{children}</div>
    </div>
  )
}

function FilterDropdown({
  title,
  selectedLabel,
  isOpen,
  onToggle,
  onClose,
  hasSelection,
  children,
}: {
  title: string
  selectedLabel: string
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  hasSelection: boolean
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  return (
    <div ref={containerRef} className="relative">
      <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
        {title}
      </h4>
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between rounded-lg border border-neutral-700 bg-neutral-900/60 px-4 py-2.5 text-sm transition-colors",
          "hover:border-neutral-400",
          isOpen && "border-primary-500 bg-neutral-900",
          hasSelection ? "text-primary-500" : "text-neutral-500"
        )}
      >
        <span>{selectedLabel}</span>
        <ChevronDown
          className={cn(
            "ml-auto h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-y-auto rounded-xl border border-neutral-800 bg-surface p-1 shadow-lg shadow-black/20">
          {children}
        </div>
      )}
    </div>
  )
}

function DropdownOption({
  isSelected,
  onSelect,
  children,
}: {
  isSelected: boolean
  onSelect: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "relative flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors",
        "hover:bg-neutral-900 hover:text-neutral-50",
        isSelected
          ? "bg-primary-500/10 text-primary-500"
          : "text-neutral-500"
      )}
    >
      {children}
      {isSelected && <Check className="ml-auto h-4 w-4 text-primary-500" />}
    </button>
  )
}

export { CarFiltersSidebar, type Filters }
