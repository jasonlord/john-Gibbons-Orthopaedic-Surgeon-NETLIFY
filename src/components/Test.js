export const TestComponent = ({ title, subtitle }) => {
  // Test 1: Basic HTML with /* html */ comment
  return /* html */ `
    <div class="bg-primary text-white p-8 rounded-lg shadow-lg">
      <h1 class="text-9oxl font-bold mb-4">${title}</h1>
      <p class="text-lg opacity-90">${subtitle}</p>
      
      <!-- Test nested elements -->
      <div class="mt-6 space-y-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Click Me
        </button>
        
        <ul class="list-disc list-inside space-y-2">
          <li class="text-gray-200">Item dfd1</li>
          <li class="text-gray-200">Item 2</li>
          <li class="text-gray-200">Item 3</li>
        </ul>
      </div>
      
      <!-- Test form elements -->
      <form class="mt-12">
        <input 
          type="text" 
          class="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="Enter text..."
        />
        <textarea 
          class="mt-4 border border-gray-300 rounded px-4 py-2 w-full"
          rows="4"
        ></textarea>
      </form>
      
      <!-- Test complex nesting -->
      <div class="grid grid-cols-3 gap-4 mt-6">
        <div class="bg-white text-gray-800 p-4 rounded">
          <h3 class="font-bold">Card 1</h3>
          <p class="text-sm mt-2">Content here</p>
        </div>
        <div class="bg-white text-gray-800 p-4 rounded">
          <h3 class="font-semibold">Card 2</h3>
          <p class="text-sm mt-2">Content here</p>
        </div>
        <div class="bg-white text-gray-800 p-4 rounded">
          <h3 class="font-semibold">Card 3</h3>
          <p class="text-sm mt-2">Content here</p>
        </div>
      </div>
    </div>
  `;
};

// Test 2: Without comment (should NOT highlight)
export const TestWithoutComment = () => {
  return `
    <div class="bg-red-500">This should NOT be highlighted</div>
  `;
};
