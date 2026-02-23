import React from "react";
import { View } from "react-native";
import { ComponentExample } from "@/components/component/ComponentExample";
import { Divider } from "@/components/ui/Divider/Divider";
import { HStack } from "@/components/ui/HStack/HStack";
import { Radio } from "@/components/ui/Radio/Radio";
import { Switch } from "@/components/ui/Switch/Switch";
import tw from "@/components/ui/twrnc.config";
import { VStack } from "@/components/ui/VStack/VStack";
import { useToggle } from "@/hooks/useToggle";

export default function RadioScreen() {
	const [horizontal, toggleHorizontal] = useToggle(false);
	const [value, setValue] = React.useState<string>("apple");

	return (
		<ComponentExample component="Radio">
			<ComponentExample.Section title="Basic Usage">
				<HStack gap={4} justify="center" items="center" style={tw`h-40`}>
					<Radio />
					<Radio defaultChecked />
					<Radio disabled />
					<Radio defaultChecked disabled />
				</HStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Radio Group">
				<VStack gap={4}>
					<View
						style={tw`flex flex-row bg-transparent h-40 justify-center items-center`}
					>
						<Radio.Group
							value={value}
							onChange={setValue}
							horizontal={horizontal}
						>
							<Radio value="apple" label="Apple" />
							<Radio value="banana" label="Banana" />
							<Radio value="orange" label="Orange" />
						</Radio.Group>
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
