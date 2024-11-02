import { ref, computed, type ComputedRef, CSSProperties } from 'vue'

interface Position {
	x: number
	y: number
}

export function useImageZoom() {
	const scale = ref<number>(1)
	const position = ref<Position>({ x: 0, y: 0 })
	const isDragging = ref<boolean>(false)
	const lastPosition = ref<Position>({ x: 0, y: 0 })
	const lastTouchDistance = ref<number>(0)

	const imageZoomStyle: ComputedRef<CSSProperties> = computed(() => ({
		transform: `translate(${position.value.x}px, ${position.value.y}px) scale(${scale.value})`
	}))

	function handleZoom(event: WheelEvent): void {
		event.preventDefault()
		const delta = event.deltaY > 0 ? 0.9 : 1.1
		scale.value = Math.min(Math.max(scale.value * delta, 1), 5)
	}

	function handleTouchStart(event: TouchEvent): void {
		if (event.touches.length === 2) {
			const touch1 = event.touches[0]
			const touch2 = event.touches[1]
			lastTouchDistance.value = Math.hypot(
				touch2.clientX - touch1.clientX,
				touch2.clientY - touch1.clientY
			)
		} else if (event.touches.length === 1) {
			isDragging.value = true
			lastPosition.value = {
				x: event.touches[0].clientX - position.value.x,
				y: event.touches[0].clientY - position.value.y
			}
		}
	}

	function handleTouchMove(event: TouchEvent): void {
		if (event.touches.length === 2) {
			const touch1 = event.touches[0]
			const touch2 = event.touches[1]
			const distance = Math.hypot(
				touch2.clientX - touch1.clientX,
				touch2.clientY - touch1.clientY
			)
			const delta = distance / lastTouchDistance.value
			scale.value = Math.min(Math.max(scale.value * delta, 1), 5)
			lastTouchDistance.value = distance
		} else if (isDragging.value) {
			position.value = {
				x: event.touches[0].clientX - lastPosition.value.x,
				y: event.touches[0].clientY - lastPosition.value.y
			}
		}
	}

	function handleTouchEnd(): void {
		isDragging.value = false
	}

	function handleDragStart(event: MouseEvent): void {
		isDragging.value = true
		lastPosition.value = {
			x: event.clientX - position.value.x,
			y: event.clientY - position.value.y
		}
	}

	function handleDragMove(event: MouseEvent): void {
		if (isDragging.value) {
			position.value = {
				x: event.clientX - lastPosition.value.x,
				y: event.clientY - lastPosition.value.y
			}
		}
	}

	function handleDragEnd(): void {
		isDragging.value = false
	}

	function resetZoom(): void {
		scale.value = 1
		position.value = { x: 0, y: 0 }
	}

	return {
		scale,
		position,
		imageZoomStyle,
		handleZoom,
		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,
		handleDragStart,
		handleDragMove,
		handleDragEnd,
		resetZoom
	}
}