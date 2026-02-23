import { ComponentExample } from "@/components/component/ComponentExample";
import { Text } from "@/components/ui/Text/Text";
import tw from "@/components/ui/twrnc.config";
import { VStack } from "@/components/ui/VStack/VStack";

export default function TextScreen() {
	return (
		<ComponentExample component="Text" style={tw`flex-1`}>
			<ComponentExample.Section title="Variants">
				<VStack>
					<Text size="xs">Extra Small Text</Text>
					<Text size="sm">Small Text</Text>
					<Text size="md">Medium Text</Text>
					<Text size="lg">Large Text</Text>
					<Text size="xl">Extra Large Text</Text>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Weight Variants">
				<VStack>
					<Text weight="normal">Normal Weight</Text>
					<Text weight="medium">Medium Weight</Text>
					<Text weight="semibold">Semibold Weight</Text>
					<Text weight="bold">Bold Weight</Text>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Color Variants">
				<VStack>
					<Text color="primary">
						React ドキュメントへようこそ！ このページでは、日々の開発で使用する
						React のコンセプトのうち 80％ の部分を紹介します。
					</Text>
					<Text color="secondary">
						React ドキュメントへようこそ！ このページでは、日々の開発で使用する
						React のコンセプトのうち 80％ の部分を紹介します。
					</Text>
					<Text color="tertiary">
						React ドキュメントへようこそ！ このページでは、日々の開発で使用する
						React のコンセプトのうち 80％ の部分を紹介します。
					</Text>
					<Text color="onBackground">
						React ドキュメントへようこそ！ このページでは、日々の開発で使用する
						React のコンセプトのうち 80％ の部分を紹介します。
					</Text>
					<Text color="onSurface">
						React ドキュメントへようこそ！ このページでは、日々の開発で使用する
						React のコンセプトのうち 80％ の部分を紹介します。
					</Text>
					<Text color="onSurfaceVariant">
						React ドキュメントへようこそ！ このページでは、日々の開発で使用する
						React のコンセプトのうち 80％ の部分を紹介します。
					</Text>
					<Text color="error">
						React ドキュメントへようこそ！ このページでは、日々の開発で使用する
						React のコンセプトのうち 80％ の部分を紹介します。
					</Text>
				</VStack>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
