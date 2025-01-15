import { BookingsFirstRowItemStyled, BookingsFirstRowStyled, BookingsItemCheckHourStyled, BookingsItemCheckStyled, BookingsItemBookingsIdStyled, 
    BookingsItemBookingsInfoStyled, BookingsItemBookingsPhotoStyled, BookingsItemBookingsStyled, BookingsItemOrderDateStyled, BookingsItemSpecialRequestStyled, 
    BookingsItemStatusStyled, BookingsItemStyled, BookingsItemTextStyled,BookingsMenuItemStyled, BookingsMenuSearchBarInputStyled, BookingsMenuSearchBarStyled, 
    BookingsMenuSortBy, BookingsMenuSortByText, BookingsMenuStyled, BookingsMenuTextStyled,
    BookingsStyled } from "./BookingsStyles";
import photo from '../assets/perfil.jpg';
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Bookings = () => {

   return (
       <BookingsStyled>

           <BookingsMenuStyled>
               <BookingsMenuTextStyled>
                   <BookingsMenuItemStyled>All Bookings</BookingsMenuItemStyled>
                   <BookingsMenuItemStyled>Checking In</BookingsMenuItemStyled>
                   <BookingsMenuItemStyled>Checking Out</BookingsMenuItemStyled>
                   <BookingsMenuItemStyled>In Progress</BookingsMenuItemStyled>
               </BookingsMenuTextStyled>
               <BookingsMenuSearchBarStyled>
                   <BookingsMenuSearchBarInputStyled type="text" placeholder="Buscar cliente..."/>
                   <IoIosSearch />
               </BookingsMenuSearchBarStyled>
               <BookingsMenuSortBy>
                   <BookingsMenuSortByText>Newest</BookingsMenuSortByText>
                   <IoIosArrowDown />
               </BookingsMenuSortBy>
           </BookingsMenuStyled>
           <BookingsFirstRowStyled>
               <BookingsFirstRowItemStyled>Guest</BookingsFirstRowItemStyled>
               <BookingsFirstRowItemStyled>Order Date</BookingsFirstRowItemStyled>
               <BookingsFirstRowItemStyled>Check In</BookingsFirstRowItemStyled>
               <BookingsFirstRowItemStyled>Check Out</BookingsFirstRowItemStyled>
               <BookingsFirstRowItemStyled>Special Request</BookingsFirstRowItemStyled>
               <BookingsFirstRowItemStyled>Room Type</BookingsFirstRowItemStyled>
               <BookingsFirstRowItemStyled>Status</BookingsFirstRowItemStyled>
           </BookingsFirstRowStyled>
           <BookingsItemStyled>
               <BookingsItemBookingsStyled>
                   <BookingsItemBookingsPhotoStyled src={photo} />
                   <BookingsItemBookingsInfoStyled>
                           <BookingsItemTextStyled>Alberto Calero</BookingsItemTextStyled>
                       <BookingsItemBookingsIdStyled>#000123456</BookingsItemBookingsIdStyled>
                   </BookingsItemBookingsInfoStyled>
               </BookingsItemBookingsStyled>
               <BookingsItemOrderDateStyled>Oct 30th 2020 09:21 AM</BookingsItemOrderDateStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 2th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>9:46 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 4th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>6:12 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemSpecialRequestStyled>View Notes</BookingsItemSpecialRequestStyled>
               <BookingsItemTextStyled>Deluxe A - 02</BookingsItemTextStyled>
               <BookingsItemStatusStyled type="refund">Refund</BookingsItemStatusStyled>
               <SlOptionsVertical />
           </BookingsItemStyled>

           <BookingsItemStyled>
               <BookingsItemBookingsStyled>
                   <BookingsItemBookingsPhotoStyled src={photo} />
                   <BookingsItemBookingsInfoStyled>
                           <BookingsItemTextStyled>Alberto Calero</BookingsItemTextStyled>
                       <BookingsItemBookingsIdStyled>#000123456</BookingsItemBookingsIdStyled>
                   </BookingsItemBookingsInfoStyled>
               </BookingsItemBookingsStyled>
               <BookingsItemOrderDateStyled>Oct 30th 2020 09:21 AM</BookingsItemOrderDateStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 2th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>9:46 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 4th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>6:12 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemSpecialRequestStyled type="booked">View Notes</BookingsItemSpecialRequestStyled>
               <BookingsItemTextStyled>Deluxe A - 03</BookingsItemTextStyled>
               <BookingsItemStatusStyled type="booked">Booked</BookingsItemStatusStyled>
               <SlOptionsVertical />
           </BookingsItemStyled>

           <BookingsItemStyled>
               <BookingsItemBookingsStyled>
                   <BookingsItemBookingsPhotoStyled src={photo} />
                   <BookingsItemBookingsInfoStyled>
                           <BookingsItemTextStyled>Alberto Calero</BookingsItemTextStyled>
                       <BookingsItemBookingsIdStyled>#000123456</BookingsItemBookingsIdStyled>
                   </BookingsItemBookingsInfoStyled>
               </BookingsItemBookingsStyled>
               <BookingsItemOrderDateStyled>Oct 30th 2020 09:21 AM</BookingsItemOrderDateStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 2th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>9:46 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 4th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>6:12 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemSpecialRequestStyled>View Notes</BookingsItemSpecialRequestStyled>
               <BookingsItemTextStyled>Deluxe A - 04</BookingsItemTextStyled>
               <BookingsItemStatusStyled type="pending">Pending</BookingsItemStatusStyled>
               <SlOptionsVertical />
           </BookingsItemStyled>

           <BookingsItemStyled>
               <BookingsItemBookingsStyled>
                   <BookingsItemBookingsPhotoStyled src={photo} />
                   <BookingsItemBookingsInfoStyled>
                           <BookingsItemTextStyled>Alberto Calero</BookingsItemTextStyled>
                       <BookingsItemBookingsIdStyled>#000123456</BookingsItemBookingsIdStyled>
                   </BookingsItemBookingsInfoStyled>
               </BookingsItemBookingsStyled>
               <BookingsItemOrderDateStyled>Oct 30th 2020 09:21 AM</BookingsItemOrderDateStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 2th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>9:46 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 4th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>6:12 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemSpecialRequestStyled>View Notes</BookingsItemSpecialRequestStyled>
               <BookingsItemTextStyled>Deluxe B - 224</BookingsItemTextStyled>
               <BookingsItemStatusStyled type="canceled">Canceled</BookingsItemStatusStyled>
               <SlOptionsVertical />
           </BookingsItemStyled>

           <BookingsItemStyled>
               <BookingsItemBookingsStyled>
                   <BookingsItemBookingsPhotoStyled src={photo} />
                   <BookingsItemBookingsInfoStyled>
                           <BookingsItemTextStyled>Alberto Calero</BookingsItemTextStyled>
                       <BookingsItemBookingsIdStyled>#000123456</BookingsItemBookingsIdStyled>
                   </BookingsItemBookingsInfoStyled>
               </BookingsItemBookingsStyled>
               <BookingsItemOrderDateStyled>Oct 30th 2020 09:21 AM</BookingsItemOrderDateStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 2th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>9:46 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemCheckStyled>
                   <BookingsItemTextStyled>Nov 4th, 2020</BookingsItemTextStyled>
                   <BookingsItemCheckHourStyled>6:12 PM</BookingsItemCheckHourStyled>
               </BookingsItemCheckStyled>
               <BookingsItemSpecialRequestStyled>View Notes</BookingsItemSpecialRequestStyled>
               <BookingsItemTextStyled>Deluxe C - 412</BookingsItemTextStyled>
               <BookingsItemStatusStyled type="refund">Refund</BookingsItemStatusStyled>
               <SlOptionsVertical />
           </BookingsItemStyled>

           <BookingsItemStyled>
                   <BookingsItemBookingsStyled>
                       <BookingsItemBookingsPhotoStyled src={photo} />
                       <BookingsItemBookingsInfoStyled>
                           <BookingsItemTextStyled>Alberto Calero</BookingsItemTextStyled>
                           <BookingsItemBookingsIdStyled>#000123456</BookingsItemBookingsIdStyled>
                       </BookingsItemBookingsInfoStyled>
                   </BookingsItemBookingsStyled>
                   <BookingsItemOrderDateStyled>Oct 30th 2020 09:21 AM</BookingsItemOrderDateStyled>
                   <BookingsItemCheckStyled>
                       <BookingsItemTextStyled>Nov 2th, 2020</BookingsItemTextStyled>
                       <BookingsItemCheckHourStyled>9:46 PM</BookingsItemCheckHourStyled>
                       </BookingsItemCheckStyled>
                   <BookingsItemCheckStyled>
                       <BookingsItemTextStyled>Nov 4th, 2020</BookingsItemTextStyled>
                       <BookingsItemCheckHourStyled>6:12 PM</BookingsItemCheckHourStyled>
                   </BookingsItemCheckStyled>
                   <BookingsItemSpecialRequestStyled type="booked">View Notes</BookingsItemSpecialRequestStyled>
                   <BookingsItemTextStyled>Deluxe D - 219</BookingsItemTextStyled>
                   <BookingsItemStatusStyled type="booked">Booked</BookingsItemStatusStyled>
                   <SlOptionsVertical />
               </BookingsItemStyled>

               <BookingsItemStyled>
                    <BookingsItemBookingsStyled>
                        <BookingsItemBookingsPhotoStyled src={photo} />
                        <BookingsItemBookingsInfoStyled>
                                <BookingsItemTextStyled>Alberto Calero</BookingsItemTextStyled>
                            <BookingsItemBookingsIdStyled>#000123456</BookingsItemBookingsIdStyled>
                        </BookingsItemBookingsInfoStyled>
                    </BookingsItemBookingsStyled>
                    <BookingsItemOrderDateStyled>Oct 30th 2020 09:21 AM</BookingsItemOrderDateStyled>
                    <BookingsItemCheckStyled>
                        <BookingsItemTextStyled>Nov 2th, 2020</BookingsItemTextStyled>
                        <BookingsItemCheckHourStyled>9:46 PM</BookingsItemCheckHourStyled>
                    </BookingsItemCheckStyled>
                    <BookingsItemCheckStyled>
                        <BookingsItemTextStyled>Nov 4th, 2020</BookingsItemTextStyled>
                        <BookingsItemCheckHourStyled>6:12 PM</BookingsItemCheckHourStyled>
                    </BookingsItemCheckStyled>
                    <BookingsItemSpecialRequestStyled>View Notes</BookingsItemSpecialRequestStyled>
                    <BookingsItemTextStyled>Deluxe A - 972</BookingsItemTextStyled>
                    <BookingsItemStatusStyled type="pending">Pending</BookingsItemStatusStyled>
                    <SlOptionsVertical />
                </BookingsItemStyled>

                <BookingsItemStyled>
                    <BookingsItemBookingsStyled>
                        <BookingsItemBookingsPhotoStyled src={photo} />
                        <BookingsItemBookingsInfoStyled>
                                <BookingsItemTextStyled>Alberto Calero</BookingsItemTextStyled>
                            <BookingsItemBookingsIdStyled>#000123456</BookingsItemBookingsIdStyled>
                        </BookingsItemBookingsInfoStyled>
                    </BookingsItemBookingsStyled>
                    <BookingsItemOrderDateStyled>Oct 30th 2020 09:21 AM</BookingsItemOrderDateStyled>
                    <BookingsItemCheckStyled>
                        <BookingsItemTextStyled>Nov 2th, 2020</BookingsItemTextStyled>
                        <BookingsItemCheckHourStyled>9:46 PM</BookingsItemCheckHourStyled>
                    </BookingsItemCheckStyled>
                    <BookingsItemCheckStyled>
                        <BookingsItemTextStyled>Nov 4th, 2020</BookingsItemTextStyled>
                        <BookingsItemCheckHourStyled>6:12 PM</BookingsItemCheckHourStyled>
                    </BookingsItemCheckStyled>
                    <BookingsItemSpecialRequestStyled>View Notes</BookingsItemSpecialRequestStyled>
                    <BookingsItemTextStyled>Deluxe A - 02</BookingsItemTextStyled>
                    <BookingsItemStatusStyled type="canceled">Canceled</BookingsItemStatusStyled>
                    <SlOptionsVertical />
                </BookingsItemStyled>

           </BookingsStyled>
           
       )
   }

export default Bookings;
