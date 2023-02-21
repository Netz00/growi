/**
 * Hook that detects wrap inside flexbox and return the index of first wrapped element
 */
function getFirstWrapItemIndex(parentId: string, childrenTag: string): number {
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
				if (currItem && firstItem.top < currItem.top) return i;
			}
		return items.length;
	}
	return -1;
}
export { getFirstWrapItemIndex };
