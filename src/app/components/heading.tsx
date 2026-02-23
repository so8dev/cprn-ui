import { ComponentExample } from "@/components/component/ComponentExample";
import { Heading } from "@/components/ui/Heading/Heading";

export default function HeadingScreen() {
	return (
		<ComponentExample component="Heading">
			<ComponentExample.Section title="Levels">
				<Heading level={1}>Heading 1</Heading>
				<Heading level={2}>Heading 2</Heading>
				<Heading level={3}>Heading 3</Heading>
				<Heading level={4}>Heading 4</Heading>
				<Heading level={5}>Heading 5</Heading>
				<Heading level={6}>Heading 6</Heading>
			</ComponentExample.Section>

			<ComponentExample.Section title="Colors">
				<Heading color="primary">Primary Color</Heading>
				<Heading color="secondary">Secondary Color</Heading>
				<Heading color="tertiary">Tertiary Color</Heading>
				<Heading color="onBackground">On Background</Heading>
				<Heading color="onSurface">On Surface</Heading>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
