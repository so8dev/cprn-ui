import {
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	Edit,
	Eye,
	EyeOff,
	Home,
	Sun,
} from "lucide-react-native";
import React from "react";
import { ComponentExample } from "@/components/component/ComponentExample";
import { Divider } from "@/components/ui/Divider/Divider";
import { HStack } from "@/components/ui/HStack/HStack";
import { Icon } from "@/components/ui/Icon/Icon";
import { IconProps } from "@/components/ui/Icon/types";
import { Radio } from "@/components/ui/Radio/Radio";
import tw from "@/components/ui/twrnc.config";
import { VStack } from "@/components/ui/VStack/VStack";

export default function IconScreen() {
	const [size, setSize] = React.useState<IconProps["size"]>("md");
	const [color, setColor] = React.useState<IconProps["color"]>("onSurface");

	return (
		<ComponentExample component="Icon">
			<ComponentExample.Section title="Icon">
				<VStack flex={1} gap={4}>
					<VStack gap={4} justify="center" items="center">
						<HStack gap={4} justify="center" items="center">
							<Icon size={size} color={color} as={ArrowLeft} />
							<Icon size={size} color={color} as={ArrowUp} />
							<Icon size={size} color={color} as={ArrowRight} />
							<Icon size={size} color={color} as={ArrowDown} />
						</HStack>
						<HStack gap={4} justify="center" items="center">
							<Icon size={size} color={color} as={Home} />
							<Icon size={size} color={color} as={Edit} />
							<Icon size={size} color={color} as={Eye} />
							<Icon size={size} color={color} as={EyeOff} />
						</HStack>
					</VStack>
					<Divider />
					<VStack flex={1} gap={4}>
						{/* @ts-ignore */}
						<Radio.Group value={color} onChange={setColor} horizontal>
							<Radio value="primary" label="Primary" />
							<Radio value="secondary" label="Secondary" />
							<Radio value="tertiary" label="Tertiary" />
							<Radio value="error" label="Error" />
							<Radio value="onSurface" label="On Surface" />
						</Radio.Group>

						{/* @ts-ignore */}
						<Radio.Group value={size} onChange={setSize} horizontal>
							<Radio value="sm" label="Small" />
							<Radio value="md" label="Medium" />
							<Radio value="lg" label="Large" />
						</Radio.Group>
					</VStack>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Icon Action">
				<VStack flex={1} gap={4} justify="center" items="center">
					<Icon.IconAction
						variant="contained"
						action="primary"
						size={size}
						as={ArrowUp}
					/>
					<Icon.IconAction
						variant="outlined"
						action="secondary"
						size={size}
						as={ArrowUp}
					/>
					<Icon.IconAction
						variant="ghost"
						action="tertiary"
						size={size}
						as={ArrowUp}
					/>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="FAB">
				<Icon.IconAction as={Sun} style={tw.style("absolute top-0 left-1")} />
			</ComponentExample.Section>
		</ComponentExample>
	);
}
