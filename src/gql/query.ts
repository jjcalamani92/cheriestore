import { gql } from "@apollo/client";

export const PBS = gql`
	query MakeupAll($site: String!) {
		makeupAll(site: $site) {
			slug
		}
	}
`;
export const PRODUCTS = gql`
	query MakeupAll($site: String!) {
		makeupAll(site: $site) {
			name
			image
			price
			description
			category
			section
			item
			slug
		}
	}
`;

export const CATEGORY = gql`
	query MakeupAll($site: String!) {
		makeupAll(site: $site) {
			category
		}
	}
`;
export const SECTION = gql`
	query MakeupAll($site: String!) {
		makeupAll(site: $site) {
			category
			section
		}
	}
`;
export const ITEM = gql`
	query MakeupAll($site: String!) {
		makeupAll(site: $site) {
			category
			section
			item
		}
	}
`;


export const PRODUCTS_BY_ITEM = gql`
	query MakeupByCategoryAndSectionAndItem($category: String!, $section: String!, $item: String!, $site: String!) {
		makeupByCategoryAndSectionAndItem(category: $category, section: $section, item: $item, site: $site) {
			name
			price
			image
			slug
		}
	}
`;
export const PRODUCTS_BY_SECTION = gql`
	query MakeupByCategoryAndSectionAndItem($category: String!, $section: String!, $item: String!, $site: String!) {
		makeupByCategoryAndSectionAndItem(category: $category, section: $section, item: $item, site: $site) {
			name
			price
			image
			slug
		}
	}
`;

export const PRODUCT_BY_SLUG = gql`
	query MakeupBySlug($slug: String!, $site: String!) {
		makeupBySlug(slug: $slug, site: $site) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			section
			item
			price
			oldPrice
			tags

			color
			tone
		}
	}
`;


export const PRODUCT_ALL = gql`
	query MakeupsAll($limit: Float!, $offset:Float!, $site: String!) {
		makeupsAll(input:  { limit: $limit, offset: $offset}, site:$site ) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			section
			item
			price
			tags
			
			color
			tone
		}

}
`
