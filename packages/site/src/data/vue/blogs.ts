import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
		title: "The Vue Point",
		author: "Evan You",
		description: "Updates, tips & opinions from the maintainers of Vue.js.",
		image: "https://github.com/yyx990803.png",
		href: "https://blog.vuejs.org/",
		tags: [],
	},
	{
		title: "Vue.js Developers",
		author: "Anthony Gore",
		description:
			"The mission of Vue.js Developers is to help web professionals up their skill and knowledge of Vue.js.",
		image:
			"https://pbs.twimg.com/profile_images/946256627203584000/S_GHxy5Q_400x400.jpg",
		href: "https://vuejsdevelopers.com/blog/",
		tags: [],
	},
	{
		title: "VueSchool Articles",
		author: "Alex “hootlex” Kyriakidis",
		description:
			"Vue School aims to help the Vue.js community and framework grow, and all our content is in-depth, relevant, and expertly created.",
		image: "https://github.com/vueschool.png",
		href: "https://vueschool.io/articles/",
		tags: [],
	},
	{
		title: "This Dot Blog",
		author: "This Dot Labs",
		description:
			"Variety of topics related to Vue, written by the team at This Dot",
		image: "https://github.com/thisdot.png",
		href: "https://www.thisdot.co/blog/?filter=VueJS#result",
		tags: [],
	},
]
