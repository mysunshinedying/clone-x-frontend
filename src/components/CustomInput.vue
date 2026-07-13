<template>
  <!-- 시각적 구분을 위해 테두리와 배경색을 지정한 자식 영역 -->
  <div style="border: 2px dashed #999; padding: 15px; background-color: #fafafa; margin-top: 10px;">
    <strong style="color: #666;">[자식 컴포넌트 영역]</strong>

    <div style="margin-top: 10px;">
      <!-- 표준 input 이벤트를 감지하여 updateValue 메서드로 연결 -->
      <input
          :type="type"
          :value="modelValue"
          @input="updateValue"
          placeholder="여기에 입력하세요"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  // 부모 컴포넌트가 내려준 데이터 통로
  props: {
    type: String,
    modelValue: String
  },
  // 부모 컴포넌트에게 발송할 이벤트 주파수 등록
  emits: ['update:modelValue'],
  methods: {
    updateValue(event) {
      // 1. 진짜 HTML input에 입력된 실시간 값을 가져옴
      const value = event.target.value.trim();

      // 2. 부모 컴포넌트의 v-model 안테나를 향해 가공된 값을 쏘아 올림
      this.$emit('update:modelValue', value);
    }
  }
}
</script>
