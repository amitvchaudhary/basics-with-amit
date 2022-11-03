<script lang="ts" setup>
interface Props {
  to?: string;
}

const { to = "/" } = defineProps<Props>();
const router = useRouter();

router.replace(to);
</script>
