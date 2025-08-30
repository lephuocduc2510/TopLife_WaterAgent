import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Divider } from 'primereact/divider'

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white">
      {/* Top section - Newsletter */}
      <div className="px-4 py-6 bg-blue-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-nogutter">
            <div className="col-12 md:col-8">
              <h3 className="text-xl font-semibold mb-2">THEO DÕI BẢN TIN HÀNG TUẦN</h3>
              <p className="text-blue-100 mb-3">
                Đăng ký để nhận thông tin mới nhất về sản phẩm và dịch vụ của TopLife
              </p>
            </div>
            <div className="col-12 md:col-4">
              <div className="flex gap-2">
                <InputText 
                  placeholder="Nhập email của bạn..." 
                  className="flex-1"
                />
                <Button 
                  label="ĐĂNG KÝ" 
                  className="p-button-warning"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-nogutter">
            {/* Company info */}
            <div className="col-12 md:col-4 mb-4">
              <div className="flex align-items-center mb-3">
                <i className="pi pi-droplet text-blue-300 text-3xl mr-3"></i>
                <div>
                  <h2 className="text-2xl font-bold text-white">TopLife</h2>
                  <p className="text-blue-300 text-sm">Đà Nẵng</p>
                </div>
              </div>
              <p className="text-blue-100 mb-3 line-height-3">
                Nước uống là nhu cầu tiêu dùng thiết yếu hằng ngày của mọi nhà. 
                Hãy để Nước uống TopLife mang đến cho bạn sản phẩm nước uống chất lượng, 
                đảm bảo và uy tín hàng đầu trên thị trường.
              </p>
              
              {/* Social media */}
              <div className="flex gap-2">
                <Button 
                  icon="pi pi-facebook" 
                  className="p-button-rounded p-button-outlined p-button-sm"
                  tooltip="Facebook"
                />
                <Button 
                  icon="pi pi-youtube" 
                  className="p-button-rounded p-button-outlined p-button-sm"
                  tooltip="Youtube"
                />
                <Button 
                  icon="pi pi-twitter" 
                  className="p-button-rounded p-button-outlined p-button-sm"
                  tooltip="Twitter"
                />
                <Button 
                  icon="pi pi-comments" 
                  className="p-button-rounded p-button-outlined p-button-sm"
                  tooltip="Chat"
                />
              </div>
            </div>

            {/* Contact info */}
            <div className="col-12 md:col-4 mb-4">
              <h4 className="text-lg font-semibold mb-3 text-white">THÔNG TIN LIÊN HỆ</h4>
              <div className="flex flex-column gap-3">
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-envelope text-blue-300"></i>
                  <span className="text-blue-100">kdtoplife@gmail.com</span>
                </div>
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-phone text-blue-300"></i>
                  <span className="text-blue-100">0926 96 79 79</span>
                </div>
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-map-marker text-blue-300"></i>
                  <span className="text-blue-100">Đà Nẵng, Việt Nam</span>
                </div>
              </div>
              
              <Button 
                label="LIÊN HỆ" 
                className="p-button-warning mt-3"
                icon="pi pi-arrow-right"
              />
            </div>

            {/* Working hours */}
            <div className="col-12 md:col-4 mb-4">
              <h4 className="text-lg font-semibold mb-3 text-white">THỜI GIAN HOẠT ĐỘNG</h4>
              <div className="flex flex-column gap-2 text-blue-100">
                <div>
                  <strong>Thứ 2 - Thứ 6:</strong>
                  <br />Sáng: 7h - 11h30
                  <br />Chiều: 1h - 4h30
                </div>
                <div>
                  <strong>Thứ 7:</strong>
                  <br />Sáng: 7h - 11h30
                  <br />Chiều: 1h - 4h30
                </div>
                <div className="text-orange-300">
                  <strong>CHỦ NHẬT: NGHỈ</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider className="my-0" />

      {/* Bottom section */}
      <div className="px-4 py-4 bg-blue-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-column md:flex-row justify-content-between align-items-center">
            <p className="text-blue-200 text-sm mb-2 md:mb-0">
              © {new Date().getFullYear()} Bản quyền thuộc về TopLife Đà Nẵng | 
              <span className="ml-1">16+ năm kinh nghiệm</span>
            </p>
            <div className="flex gap-4 text-sm">
              <span className="text-blue-200 cursor-pointer hover:text-white">
                Chính sách bảo mật
              </span>
              <span className="text-blue-200 cursor-pointer hover:text-white">
                Điều khoản sử dụng
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
