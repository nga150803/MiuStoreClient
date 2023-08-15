export interface Ingredient {
  icon: string
  label: string
  content: string
}

export const allIngredients = [
  {
    icon: '🍞',
    label: 'Mô tả sản phẩm',
    content:
      'Marc Jacobs Daisy đã là hương thơm của tôi trong nhiều năm. Nó tươi mát, nhẹ nhàng, hương hoa, bền lâu và là tất cả những gì tôi tìm kiếm trong một mùi hương. Marc Jacobs kể từ đó đã phát hành một vài phiên bản khác nhau của Daisy gốc, phiên bản mới nhất là Daisy Love vừa ra mắt tại Fragrance Direct..Daisy Love có bao bì tương tự như Daisy nguyên bản nhưng thay vì bó hoa trên nắp, nó có một bông cúc lớn duy nhất. Nó trông thật đẹp khi ngồi trên tủ quần áo của tôi, giống như người chị sang trọng của bản gốc! Chai đẹp cũng có một bông cúc được chạm nổi trên đầu trang. Bao bì đẹp làm cho hương thơm này trở thành một món quà hoàn hảo. Mẹ tôi luôn đãi chúng tôi nước hoa vào dịp Giáng sinh và đây chắc chắn sẽ là lựa chọn của tôi trong năm nay!'
  },
  {
    icon: '❗',
    label: 'Lưu ý sử dụng',
    content:
      'Sản phẩm lưu hương từ 6-8 tiếng. Sản phẩm này là sản phẩm làm gia tăng mùi hương không phải thực phẩm để sử dụng. Không xịt vào mặt cũng như các bộ phận nhạy cảm vs nước hoa. '
  },
  { icon: '💭', label: 'Bình luận', content: 'Chức năng đang được triển' },
  { icon: '💌', label: 'Thảo luận', content: 'Chức năng đang được triển' },
  { icon: '🍌', label: 'Banana', content: 'Kiên nè' },
  { icon: '🫐', label: 'Blueberries', content: 'Kiên nè' },
  { icon: '🥂', label: 'Champers?', content: 'Kiên nè' }
]

const [tomato, lettuce, cheese, carrot] = allIngredients
export const initialTabs = [tomato, lettuce, cheese, carrot]

export function getNextIngredient(ingredients: Ingredient[]): Ingredient | undefined {
  const existing = new Set(ingredients)
  return allIngredients.find((ingredient) => !existing.has(ingredient))
}
