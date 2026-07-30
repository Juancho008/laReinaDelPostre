import type { Tag } from '../../types'
import { WidgetFrame } from './WidgetFrame'

interface TagCloudProps {
  tags: Tag[]
  selectedTagId: string | null
  onToggleTag: (tagId: string) => void
}

export function TagCloud({ tags, selectedTagId, onToggleTag }: TagCloudProps) {
  return (
    <WidgetFrame className="sidebar-widget--tags">
      <h2 className="sidebar-widget__title">Etiquetas</h2>
      <div className="tag-cloud">
        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            className={selectedTagId === tag.id ? 'tag tag--active' : 'tag'}
            onClick={() => onToggleTag(tag.id)}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </WidgetFrame>
  )
}
