/**
 * Hook that detects wrap inside flexbox, removes wrapped items from flexbox and returns them inside fragment
 */
function getWrapItems(parentId: string, childrenTag: string): DocumentFragment {
	// Declare a fragment:
	const fragment = document.createDocumentFragment();

	let currItem;

	// Gather the children
	const items = document
		.getElementById(parentId)
		?.getElementsByTagName(childrenTag);

	if (items !== undefined) {
		const firstItem = items[0]?.getBoundingClientRect();
		if (firstItem !== undefined)
			for (let i = 1; i < items.length; i += 1) {
				currItem = items[i]?.getBoundingClientRect();
				if (currItem && firstItem.top < currItem.top)
					// Append desired element to the fragment:
					fragment.appendChild(items[i] as Node);
			}
	}
	return fragment;
}

function detectWrapItems(parentId: string, childrenTag: string): Boolean {
	let currItem;

	// Gather the children
	const items = document
		.getElementById(parentId)
		?.getElementsByTagName(childrenTag);

	if (items !== undefined) {
		const firstItem = items[0]?.getBoundingClientRect();
		if (firstItem !== undefined)
			for (let i = 1; i < items.length; i += 1) {
				currItem = items[i]?.getBoundingClientRect();
				if (currItem && firstItem.top < currItem.top) return true;
			}
	}
	return false;
}
export { getWrapItems, detectWrapItems };
