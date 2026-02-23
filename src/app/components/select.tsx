import React from "react";
import { ComponentExample } from "@/components/component/ComponentExample";
import { ActionSheetSelect } from "@/components/ui/ActionSheetSelect/ActionSheetSelect";
import { HStack } from "@/components/ui/HStack/HStack";
import { Select } from "@/components/ui/Select/Select";
import tw from "@/components/ui/twrnc.config";

export default function SelectScreen() {
	const [value, setValue] = React.useState<string>("apple");

	return (
		<ComponentExample component="Select">
			<ComponentExample.Section title="Basic Usage">
				<HStack gap={4} justify="center" items="center" style={tw`h-40`}>
					<Select value={value} onChange={setValue} initialLabel="Apple">
						<Select.Trigger>
							<Select.Input placeholder="" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="apple" label="Apple" />
							<Select.Item value="banana" label="Banana" />
							<Select.Item value="orange" label="Orange" />
						</Select.Content>
					</Select>
				</HStack>
			</ComponentExample.Section>
			<ComponentExample.Section title="Action Sheet">
				<HStack gap={4} justify="center" items="center" style={tw`h-40`}>
					<ActionSheetSelect value={value} onChange={setValue}>
						<ActionSheetSelect.Trigger>
							<ActionSheetSelect.Input placeholder="" />
						</ActionSheetSelect.Trigger>
						<ActionSheetSelect.Portal>
							<ActionSheetSelect.Content>
								<ActionSheetSelect.Item value="apple" label="Apple" />
								<ActionSheetSelect.Item value="banana" label="Banana" />
								<ActionSheetSelect.Item value="orange" label="Orange" />
							</ActionSheetSelect.Content>
						</ActionSheetSelect.Portal>
					</ActionSheetSelect>
				</HStack>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
