walk(document.body);

function walk(node)
{

	var child, next;

	switch ( node.nodeType )
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bPresident Trump\b/g, "Fuhrer Oompa Loompa");
	v = v.replace(/\bPresident Donald Trump\b/g, "Fuhrer Orange Oompa Loompa");
	v = v.replace(/\bDonald Trump\b/g, "Orange Oompa Loompa");
	v = v.replace(/\bDonald\b/g, "Orange");
	v = v.replace(/\bTrump\b/g, "Oompa Loompa");
	textNode.nodeValue = v;
}
