import React from "react";
import { View } from "react-native";
import { ComponentExample } from "@/components/component/ComponentExample";
import { Checkbox } from "@/components/ui/Checkbox/Checkbox";
import { Divider } from "@/components/ui/Divider/Divider";
import { HStack } from "@/components/ui/HStack/HStack";
import { Switch } from "@/components/ui/Switch/Switch";
import tw from "@/components/ui/twrnc.config";
import { VStack } from "@/components/ui/VStack/VStack";
import { useToggle } from "@/hooks/useToggle";

export default function CheckboxScreen() {
	const [horizontal, toggleHorizontal] = useToggle(false);
	const [values, setValues] = React.useState<string[]>([]);

	return (
		<ComponentExample component="Checkbox">
			<ComponentExample.Section title="Basic Usage">
				<HStack gap={4} justify="center" items="center" style={tw`h-40`}>
					<Checkbox />
					<Checkbox defaultChecked />
					<Checkbox disabled />
					<Checkbox defaultChecked disabled />
				</HStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Checkbox Group">
				<VStack gap={4}>
					<View
						style={tw`flex flex-row bg-transparent h-40 justify-center items-center`}
					>
						<Checkbox.Group
							value={values}
							onChange={setValues}
							horizontal={horizontal}
						>
							<Checkbox value="apple" label="Apple" />
							<Checkbox value="banana" label="Banana" />
							<Checkbox value="orange" label="Orange" />
						</Checkbox.Group>
					</View>
					<Divider />
					<Switch
						label="Horizontal"
						checked={horizontal}
						onCheckedChange={toggleHorizontal}
					/>
				</VStack>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
