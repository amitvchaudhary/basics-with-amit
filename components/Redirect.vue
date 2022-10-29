<script lang="ts" setup>
interface Props {
  to?: string;
}

const { to = "/" } = defineProps<Props>();
const router = useRouter();

console.log("to ---");
console.log(to);
router.replace(to);
</script>
