import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Package } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="medical-card group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-muted/60 overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <Package className="w-16 h-16 opacity-30" />
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured badge */}
          {collection.featured && (
            <div className="absolute top-4 left-4">
              <span className="medical-badge shadow-lg">
                Destacado
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-foreground font-bold text-xl mb-2 group-hover:text-primary transition-colors">
              {collection.name}
            </h3>
            
            {collection.description && (
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                {collection.description}
              </p>
            )}
          </div>
          
          <Button 
            onClick={() => onViewProducts(collection.id)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-md"
          >
            <span>Ver Productos</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}