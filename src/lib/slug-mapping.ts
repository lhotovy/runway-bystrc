import { activities } from '@/data/activities';

// Create a mapping from slug to activity index and language
export const slugToActivityIndex: Record<string, { index: number, lang: string }> = {}

// Create a mapping from activity index and language to slug
export const activityIndexToSlug: Record<number, Record<string, string>> = {}

// Initialize the mappings
activities.forEach((activity, index) => {
  activityIndexToSlug[index] = {}

  Object.entries(activity.translations).forEach(([lang, translation]) => {
    const { slug } = translation

    // Map slug to activity index
    slugToActivityIndex[slug] = { index, lang }

    // Map activity index and language to slug
    activityIndexToSlug[index][lang] = slug
  })
})

// Function to get activity data by slug
export function getActivityDataBySlug(slug: string) {
  const mapping = slugToActivityIndex[slug]
  if (!mapping) return null

  const { index, lang } = mapping
  const activity = activities[index]
  if (!activity) return null

  return {
    index,
    template: activity.template,
    type: activity.type,
    lang,
    ...(activity.translations as Record<string, typeof activity.translations[keyof typeof activity.translations]>)[lang]
  }
}

// Function to get all slugs for all languages
export function getAllSlugs() {
  return Object.keys(slugToActivityIndex)
}

// Function to get equivalent slug in another language
export function getEquivalentSlug(slug: string, targetLang: string) {
  const mapping = slugToActivityIndex[slug]
  if (!mapping) return null

  const { index } = mapping
  return activityIndexToSlug[index][targetLang] || null
}

export function getPageDataBySlug(slug: string) {
  const mapping = slugToActivityIndex[slug];
  if (!mapping) return null;

  const { index, lang } = mapping;
  return {
    lang,
    slug,
    activity: activities[index]
  };
}

// function to get activity by slug and lang
export function getActivityBySlugAndLang(slug: string, lang: string) {
  const mapping = slugToActivityIndex[slug]
  if (!mapping) return null

  const { index } = mapping
  return activities[index]|| null
}