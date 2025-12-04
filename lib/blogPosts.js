export const blogPosts = {
  'why-jewellery-gets-black': {
    slug: 'why-jewellery-gets-black',
    image: '/Assets/images/Silver Jewelry Collection.webp',
    alt: 'Tarnished Gold and Silver Jewellery',
    contentKeys: [
      'post1Intro',
      'post1SilverTitle',
      'post1SilverText',
      'post1Humidity',
      'post1Pollution',
      'post1Chemicals',
      'post1Storage',
      'post1GoldTitle',
      'post1GoldText',
      'post1Alloy',
      'post1Reactions',
      'post1Oxidation',
      'post1PreventionTitle',
      'post1Tip1',
      'post1Tip2',
      'post1Tip3',
      'post1Tip4'
    ]
  },
  'why-22k-instead-of-24k': {
    slug: 'why-22k-instead-of-24k',
    image: '/Assets/images/goldjewellery.jpg',
    alt: '22K Gold Jewellery',
    contentKeys: [
      'post2Intro',
      'post2KaratTitle',
      'post2K24',
      'post2K22',
      'post2K18',
      'post2K14',
      'post2WhyTitle',
      'post2Durability',
      'post2Wearability',
      'post2Design',
      'post2Value',
      'post2Cultural',
      'post2WhenTitle',
      'post2WhenText'
    ]
  },
  'why-diamond-jewellery-14k-18k': {
    slug: 'why-diamond-jewellery-14k-18k',
    image: '/Assets/images/diamond jewellery.jpg',
    alt: 'Diamond Jewellery in Gold Settings',
    contentKeys: [
      'post3Intro',
      'post3ScienceTitle',
      'post3ScienceText',
      'post3WhyTitle',
      'post3Secure',
      'post3Durability',
      'post3Versatility',
      'post3Scratch',
      'post3ColorTitle',
      'post3Yellow',
      'post3White',
      'post3Rose',
      'post3CompareTitle',
      'post3K14',
      'post3K18',
      'post3WhyNotTitle',
      'post3WhyNotText'
    ]
  }
}

export function getBlogPost(slug) {
  return blogPosts[slug] || null
}

export function getAllBlogSlugs() {
  return Object.keys(blogPosts)
}

