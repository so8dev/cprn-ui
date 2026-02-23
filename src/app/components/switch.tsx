import { ComponentExample } from "@/components/component/ComponentExample";
import { Switch } from "@/components/ui/Switch/Switch";
import { VStack } from "@/components/ui/VStack/VStack";
import { useToggle } from "@/hooks/useToggle";

export default function SwitchScreen() {
	const [checked1, setChecked1] = useToggle(false);
	const [checked2, setChecked2] = useToggle(true);
	return (
		<ComponentExample component="Switch">
			<ComponentExample.Section title="Basic">
				<VStack gap={4}>
					<Switch />
					<Switch label="With Label" />
					<Switch defaultChecked label="Default Checked" />
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Controlled">
				<VStack gap={4}>
					<Switch
						checked={checked1}
						onCheckedChange={setChecked1}
						label={`Switch 1: ${checked1 ? "ON" : "OFF"}`}
					/>
					<Switch
						checked={checked2}
						onCheckedChange={setChecked2}
						label={`Switch 2: ${checked2 ? "ON" : "OFF"}`}
					/>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Disabled States">
				<VStack gap={4}>
					<Switch checked={false} disabled label="Disabled OFF" />
					<Switch checked={true} disabled label="Disabled ON" />
				</VStack>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
