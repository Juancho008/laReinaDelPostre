import type { Tag } from '../../types'

interface TagCloudProps {
  tags: Tag[]
  selectedTagId: string | null
  onToggleTag: (tagId: string) => void
}

export function TagCloud({ tags, selectedTagId, onToggleTag }: TagCloudProps) {
  return (
    <div className="widget">
      <h2 className="widget__title">Tags</h2>
      <div className="tag-cloud">
        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            className={
              selectedTagId === tag.id ? 'tag tag--active' : 'tag'
            }
            onClick={() => onToggleTag(tag.id)}
          >
            {tag.label}
          </button>
        ))}
      </div>
      <span className="widget__heart" aria-hidden>
        ♥
      </span>
    </div>
  )
}
