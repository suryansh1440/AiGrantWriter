import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaGavel,
      title: 'AI-Powered Grant Writing',
      description: 'Our advanced AI algorithms help you craft compelling grant proposals that stand out to funders.',
    },
    {
      icon: FaLightbulb,
      title: 'Smart Suggestions',
      description: 'Get intelligent recommendations for improving your proposal based on successful grant applications.',
    },
    {
      icon: FaUsers,
      title: 'Collaborative Platform',
      description: 'Work seamlessly with your team members in real-time on grant proposals.',
    },
    {
      icon: FaChartLine,
      title: 'Success Analytics',
      description: 'Track your grant application success rate and identify areas for improvement.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              About GrantWriter
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We're on a mission to revolutionize grant writing by making it accessible, efficient, and successful for organizations of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-800 mb-6">
                At GrantWriter, we believe that every organization with a worthy cause deserves access to funding. Our mission is to democratize grant writing by leveraging artificial intelligence to help organizations create compelling proposals that resonate with funders.
              </p>
              <p className="text-gray-800">
                We combine cutting-edge AI technology with human expertise to provide a comprehensive solution that streamlines the grant writing process while maintaining the personal touch that makes proposals successful.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Our Mission"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Why Choose GrantWriter?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our platform combines powerful features with intuitive design to help you succeed in grant writing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <feature.icon className="text-3xl text-primary mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUVFxcaFhcYGBUaHxgaGBUXFxgXFxoYHSggGB8lGxcVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi8lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAEgQAAEDAgMEBgcECAQEBwAAAAECAxEAIQQSMQVBUWEGEyJxgZEyUqGxwdHwFCNCYgdDU3KCkuHxFRYk0jNjk8M0RKKjsrPC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAMREAAgIBAwIDBgQHAAAAAAAAAAECESEDMUESUQSx0RMiQmFxoQUUMpEVI1KBwfDx/9oADAMBAAIRAxEAPwCGi9q7jcFlPPfR8CL5vV05ndU4JCe2u5OgtbwrlSOyUqZn3sCoCSI76gLb41ocXiM9teH1vpq9moSmVGSd1AXjJmslMUmp7zBmw7gKjPtka0FGy6COhTWUn/hOacUuyIPiV+VWb+ASlShlSSdARAG+eZ8t9ZToa59442FR1jZjhmSRlPtPma220FdpKspOZIIg/iIuOFoFdei01k8Hx6nCfuPf/vqQlYRCplGVPG8hQPffUAiip2Y3oUJVB0I+BF/OireyWAG4qy85iJ10inYVQUSqYSRI4RZMwbp4Hv41taZ579rFZb/diw7+UGOwE2CTwGmunhU3Ooic0xuhN7dw4VWtLSowFhWWQQdCDu4248zUvMmDuFp3wDvHL3VMq4L0nNKpAcfjHAgKS4BeBLYIUZ07zpGtPwTrwH3i7xJ7MC8adndwvrQl45LZOd1MKXOWwnRIIvp8U+ZkOZZsVZiMqu/ckzYWnzqUsnRKdRSr+/8AqJMqURJI32gb5AIMndQz1oUPvE92UE8otXFPxAG+OG4yRPMWruJfUAVZglNtQLCbkG02I8qGhQbdOl5jVbQdCTlyrP4UgCSn2jWjlaplMC4CgoAHQGx03mqTD48Z0JQmyZ0EEgG/ZjsnW3uq968CVyAJv5XCvCPKph7z3N/EfyopuKDuvrBAHu5d9RcZinEIWUgBQBOhIUeMaz5jShuOFU9WRlUkxYxm3HkLXnhT1qQI4wSEkkaX9kTTlAx0denbRF2ftJ9TYUpaUjepaNZJANinW3zNTDte0haFREwnUExYAyd1UGKbdeWnrSlLY7Yyk5VJnnPrAE91quGsE2kJiEp3ADQJBBMxIm8k8ResodR3a701lvfNLb96D4THuOAyEpAMQQqfYbeNLHNSUzOo0HsojK0gntRmgxEX3eNRHWypV73k30gxaDpFaxXDOHUm7uOHwDVhkkzBjdp7q6rCpuE3jX6309CFFXZkSI03RvnQ6+dN2irKid4GngfPfS6YVsX7XxHUkpmMSkPbQbbuQhWYzFwntA+YA8atNp7cIfUkplMwI1AA3/xTaoHQZqXcS/rlRlCuaze/8NFYwaQoqN1EkqPMkm0VGsox92jv8LKepJ6knfHr/guMPiMwkiAdOfhuqQ2qorCeVHCeVcT3PSSwFMnWn5RuoHnSB50rE4jy3XA1yFNKzXUuU7F0s71Xf50qeHOdKlY6Zl8M8ENBStSM3noBwqHicQpZAg34ceHdUJ91ThubSDxAjSih4IG4nePnx7q6TKqfzJraktjMe0fr6mgLfKzb3fUCoQUpZk+fD591S23wgWieGh/typVZW31JzYDY3Sd49w4d9QMRh+tOl91vdQnsQVG5jvtU/DPpaTc9o+fluFINs8jMJgfs60uzcH2GxHkfZV8dutKgIfSndBSb3PHvrPO4pThvv0HyqwYZQ0nMYJO/5fOtIako7HL4nwmnrV7TclYvauQFXXMk7hGWY3C9QmekAUsAraEgypSTbQhPpE7+6oWIf6w6W3CpTWCbQkqWkW3VT153gzj+H6EY0y0G0UWjEYS2lz/uFOG0rQHsJz7RAj+eqMtJWqyRfQAe6pKtlJAk+Ub+FT+Yl2H/AA7TXLLJGJuTnwc8c5uP5vqKe3tJUkZ8KI/5h9l6pU4ceqKe5s+BJSB5VP5iXY0f4fpvd+fqXD20in9ZhjJ0Dij41Hbx05h9xAmxdMGYmAdLgcNKrjgkcBQ1bNR6o8qb8Re6CHgI6f6X5+pct4pKSClLM8Q7ESI4TUtGIEaMzuh2d1tRWTxGyU7kjyFQ1bLR6g8hTWt8hT8F1fF5+pu2nFiMgTbT75Nu4HTypFCpkpG//wAwIvrY8qwY2W36g8qYvZrQB7KQBrp7eFP23yI/IJfF5+ptWsSElLYRARdKeubIEGbSNOU1ObStSSA0qFTP3qLzroZvyrzZWEYGuQeIHxrgwzA0UnwUPnTWr8gl4JP4vP1PSXsO4oAlp0kXnOmQd1woacqLg0ONkkNuaCfQMwdDe9ee4ctj8fkqrVhaV2L0Df2hPcL0vbVwD8Dfxs2ZDhB+5fINzAT8FTUTbXWuNqSnDOyQQCQnjMamoLTGeAFKCAL5Vqn2Tc8ZqNiJmR1oA9EZ13PE5VAimteuDN/h9/E/sWHR/AKw+EyuJIW64VFOnJIndZPtqQcMmJXHAJn0eXM0LD520dt1RcVcBSiY7s0xUhDJAlRJXEhIgxz3DxtWOpPrlZ1aGl7KHTYhh4E77QmbxxJHwof2gzHDhoKd1alWE21XIvyEH2TR2gPQSII32seNZm90CCePxohaG+uukI01O/fPD6FAQFK1sPG3ed9TQ1KxxbG6m9Xxo6Y0vf29w4UNagLC/PWKVDsF1Q4fXnXaMGTwNKlkfUu5524g1GUipudJsCO42Pka71VbWFEdKyNCR9buFNQgk2qStqmLT4U7vcKrYf1iUejBPjb50EEqMzM8a5k+jRkLAFtePyp3YqoM2QgXueHzv7KGtxSzczw5Uxtsk99HWtKBuKuGsd+409xPH1JGHSGxmX4CgOvKdUCRA0H9623Qzo4260MQ+OsKycqDOVIBiY3yQTw0rRq6MYQ/qEj90qT7jS6kZ3X1PNcNDaSsn6/LPvoa8eVn3CvRMT0Kwi9zie5Z9xmog6AMC6XXR35T8BQ2mCdZMnhlpSMy/Ac+VMXi8xnyFaTFfo/WoynEjkCgiPJVRP8AIWJSbLaV3FQ96YpUilJbsg4ZH4ja1Bedk2sBpFS9odHccLBglI9VSDPMiZNQRs19N3GnEDfKSKOkakt2GaSD6WlRHWxJjTdUfE438I+u+mNPEmjpKUuWDxJI3U3D7WYTgcc28RnUlzICBvYA4zcjhUpTgNqqsfswOTwOo40mPcHjcXhlFshSSQwyDeO0GwFUBLmHO+b7ln/fQhsEBWaM0aBSlxIiPRUJ4RRF7EBM9W2O5T/xcNZtOzaM0lVEhDLB8uCT71H3U4bPZixjlCfgigt7Ab3pjuUr4mrLC9EsOojMtf8ANHuT8ah9S5+xopRfH3K/HYZkLwGVyFoeVIBMwXGSABqJ7fnXoiYBJ14H3VW4XYmHaKerSklGiiCSCYmCqTuqcDVOfVFLsYdFSb7kpETmME7p3GgPNzIAEnU8uFd3UkmKSbJ6UEw5PoJkJ5buZtRHlhCYGm871eI30vtNjYX8PdQy5x5R86rqI6GJsfjWm+6PwjmKItZjtAxuTaeRNcbfCpt6Pw33oT15g3Ov9Kdi6W2DfxInKk236+ypLFhqJ14+350JrDZRKadEbt/K/M8qAfZEgL5e6lUck8FnmPhXKZNGCcQCNPO9NTItRnEbo+u6mgcDWjRohJd7vdXcye7vpommg68++1T0lWFKB30NYoZFLORv86QwlwImKi4hWUG2gPnuonX8qEpYUUp9ZSR5qA+NOxNUj3TZCYZQOA+JqbNRNnD7tH7o9t6BsHaycUyHkBSUlTiYVEy24ps6GLlJPjUnOyyFOmsxtjpYMP8AaiW8ycKMOCQoDM4+qMmloSpszf0qtU7XR9qOEhXWBkPTbKUlwtwDMyCOG/WqoVloDTxVPsrb+HxDj7TTmZeHXkdTBEG4txEhQkb0mrJ7EJQMy1JQOKiEjzNADNq7SbwzS3nlZW0AFSgFKgEgTCQTF/CpoNUm0W2sdh1NtutuNrUgOFCkrBQlxKnESkkSUgp/iq6FUIE/gmnPTbQv95KT7xVCro7hQpUMI1PHj31pk1Wueke8++lJ4BFYOjmE/YI8j86cOj+F/YI8qskmu1NlFZ/l3C/sG/KujYGG/YN+VWQIOhFteR4Vn9qdNMEw4ppx7tojrMiHHA0DaXVISQjuJmimwsn/AOAYX9g35U5OxMMNGG/5anJUCJBkHQjfzFOpBbIidls/skeVBxexW1jspCVbiOPMVZCug0UgUn3MIT50k0THEIUoGCcyveeVROt51k00daaYVRriTQnFVwOTRkMBack8vbQgRXOsimJompWAN9FZjU1AQ9e9Tm3U+tpx3mmjOSJAQOMeJ+VKmdaOI/mpVZkedqI7vOuBQNcndXQK0s1o5FdSofUfRp6CN9DWiP60wBuEUNVxaiqtw8aE65O7yqaGRl86bhBL7I4utexxJ+FPcA3yPClsYTimB/zJ8kqV8KK5E2e9YQQhHJKfcK8n6O9JnsPjzhE/+GaxuJbesLfaHz9nVOohYI4Qq/EettiAByHurzBGwC67t/KO2pTRaix6xCC+kj+Mt0QrNnPIg9K9tNFnabIJU+5tBoJQkKJho4ZAKlAZUSW1gZiJNXWB2s8dp43FvNJYThMElLjZV1qspK3wMyCEpVAuO1uHOo+ycIpzC7LaVHWYrEqxj8CJCCt9RP8AEtlPiKquluKWnAbWxCVBJxGO6jSSptoBrKOGi73sCN8i/kSUHQRJDrL7r60HaTmKZcDSyHUpORbbjaUgqTL4WCYiPGtlt7oPgmsds5HVrdU+871qnnFuFaG2SqFZjGsHSu7R6PNYBjZAbaQl37dg0vKCRmWpSFhwk6m891aDGJ67bWHEdnB4ZxxR3Bb6urSO/KlRocs2gSHbWzJea2Xs/JhQpCnsQ40hILTQVlhtIEBxarZjpBN6Wy+k2y8Eo4f7c44cwC1uuPPhCtIW6ZQ3JBkSBIpnS7ZWCViEu4nFuYcuN9WpIeDSH0JUVZFKI3FRsFAkGom19u4AYRzZ+z0N4hx5pbbbGHAUkFaSnO4odlIBOYqUZt40kM9JQqsH07fcW7hcE0tSPtTyutUkkKDDIzuhJBBTPZE8+daro7hFMYbDsrVmU0y2hSuJQgJJvzFZPpu51OIweOIPVsOuIeI/A2+nJnP5QoInvqeRkfpLsdnZ7Jx2CbSwvD5C4hHZQ+1nCVtuJ0UcqiQrUEC9W3RnabmIxOOVnlll5OHaRGimkS6s7ySpYHckVV9I8W3tB5nZ7KkuNEofxi0kKSGUKCkNEi2ZxYTbUATpUbB7YZ2ZjMe3iVBtp5ZxjKjP3hWkB5tNrrC0iE6maN18w5IT+21YLCbaeR/xE41YQeCnUspSf4ZnwqJ0bnE4BnZuFJ+9bDm0MTr1YeOdbcn03Vg5YM5RryD0j2c6Oj+IecQQ7iXxinEwZQHHklINpEICJ4Xq96IdIMPgsIzh14TFsKShOf8A07iwtZSMywtsEKzG/kN1Xxgk3zTYSkJSISkAAcABAHkKfULZW00YhGdCXUpmPvG3GyeYCwCRzqaKxLO0q5XaAPO9sq/1Do1+8V7z8KY4AgSYKiLDhP4iPdU7bRDeIdMAqKpA1iQDmI3d1UyklRvMnUmho6Iu0JCySb95rvWRb5UnUBEpsVcRu/rTMK0JlQOUfUU6KvklNqgFRiN16LhwFkk+iLk/DvqKlKnlwLD2JHE86O92iGWfRHpE7yNVE8KVIhthmW82YiyUg/0FcSqlnBlLchtHpH1ibTz/AKVwJMW041LRUZD7c6VCKjwrlTRdmSGn9qMhPMeY+NNAGkT3VxsTbL5T8D8K6KMrCJaJGk+NMVbWR30ilQ9H2G48r07EOZoKtY4G3hHxooLIyhQzz4a/3qYW5TIufyyfYb1GU2Sdfh500nYOSohuO7vHSpfRpqcYzbeo/wDtrHxqDiEKSYk68RerboMmca2LyAox4pT8ab2ZDPbq4BXazW2MfiHsV9iwqw1kbS5iMQUpWUJWohDbSTbOrKo5lCAL3NZJWZmjLIKgrKMwBAVFwDBIB3A5Uz3Cob+x8OtHVqZQUFzrcpFusz9YV9+Yk+NUGL6N4FhPW4vEPEj9biMY+kzyyuISDySO6iObRaxyAzgdooQUn70tw46WwIhJWZSZiVwTToRcbZwjC+qcfISGHQ6hSlBIC0pUkEk2IhR9lVaOlGzEuKUMXhOscCQpQdblQTOUFQO7MY7zWR6Z9DsKwcCrK4+67j8K0tx9xbqltkrKgoKOWDAnsirfb760YlnZ2zW2WHFoLjzyW2x1LIVllKQIKiQQJ5cZDpCs2T6EOJhSUrSbwoBQPAwbGmNhlhClANtISCpRAShIAEkqiAAAJmqPF7GxDfbwuKdUsXLWJUXW3ORJ7bRPFJgerWY6V9I04nC4NJQpKH8c2xi2iRKerX94yojXtBJkRIG6aSVjs0Cuny8n2lGBfVgU3ViSpCTk3uoYV21oGs2tuq1x+3MMhTSHVpAxRIazAlC5E5SqMokEQFG+6qjp1tCWv8OYAViMWnq0oGjTR7Ljy49FKUyBxOmhqyxWxWXcN9ldQFtBIRB17IhKgRooRMih1gasi7axrOzGkDDYZvrMQ8htplsJbDi1GCVFKbAJm8cBvrRYnDtuR1iELymU5kpVB4iRY868y6K4F5W1lNPvF9vZjZDKz6U4gDKHD+JQbzCfyDhXpgXSlgEHmnBVAz13PUjDTXQaCHKcF0wC12mA04GgRjukOFKsQvmE/wDwFVim8oISTJ1vI8La1otvqh0iBdKfHUR7Kq+qGp8qlyydEcxRSJYIuoHKN+nlT+04rKDbnuEamrRTMzuHspimPwosN50pqSG7IpX+paEk+kRv4+H13pZSkFtFj+scuNPw8x76ItspGVsxPpKvPcOA99QnyoCEzAOnP1jxPuq0RRY7JQDm9RIsO/UnnaliAVRplFwAfbfWm7HWA0c29R3ToBfu1o6Uo9I5b7u0J8zp4UhbOyMlg8FUqKptM3nwj2dqlSorqMKmedGSaChVFkVVlUdKr8Kc++VATFuFMUnnQyD30WKgqHiAQTIjlPnSTihoT593Ooq+6KGsTVKVCcUyVi8pvofr61q26BonGpNrJ/7jfyrNuOW8PrWtP+jHtYpRjQJ9uY//AJqpNUzNxaPWqzu29gNqdOIGKxGFU4G2lllaEhw5srQVmQrtSvKCI9KtFUPa2z0YhpbK5yrGqTBSQQpK0ncpKglQO4gVkmQVmz+h+DaX1ha6139q+pTy7cFOE5fCKgdPGUD7I4lIGJGLYSwoDtdpYDqbXKC3nkaWovX7Va7HU4bFRYPdaWSRuLjZQoTxymO6n7K2G6Xxi8atDj6UlLSGwQ2wlXpZM11LVoVmLWiqvlsRF6VS5tDZjIHZDj2IUeHUtgI/9TlR8W+MPtlC3LN4zDhpte4OtLKshOgzJNudq0jmz2y+MQQesS2WgZMBKlhZtpJKRflQdtbJZxTRZfQFoN+BBGikkXSRxFKwo7t7a7eFYW+6YSgab1H8KE8STYV5n0o2cvD7JafdAS+rHpxbovCVulZynfZOQGN4rY4DoQyhxDjr2JxJaMtJxDmdLZGhSmACRxM6Cr/aOAafbLTyEuIVEpVoYII9ooTSCrMV0S2rh8Gp1OPJZxzi1F5170Xr9ksu+j1YTACZERyrZYbGtruhxCwd6VJVPkakvsoWMq0pUk7lAEeRqqwmwsK0orawzLa7jMhtCTfgQJFTJpjRT/o2QVYd3FGc2MxDr1/UzlCB3Qkkd9a3PULAYVDLTbKBCG0JQnuSIE8Tao2Mxam1DelXd2TaeEiLxrrUylyVGN4LbPSLlVg2o1nS2XUZ1iUpzCVDikG5qVnoBqg/WV0O1GLgFzVZjdshJyognidB86VlRg5OkaJD9Mc2s0nVY8L+6sNi9pKUe0onlu8qiqxNLrOuPg/6maHbOPS46FJnKEgXtJBJ+IrrbWcZkiCN3HurMf4hBA3kwK2Gy3RA41DkbPRUY0iCTXM26rfG4MG6U31jj3c6rSgcIpp2czVAFXpv2dOqvAfWlSAkC4ua4ABc3q0SwCyLaiBu76CvnHIxRFCSTTctFgkMCPqRSomWlQGTBBNdE0Rft8PdXCK2aJTGlyupcpKoZFKh2PUugrSDXFCmLJpDBOp4Gtl+idr75w/u+xLnzrFrXW+/RImS6fzEeSU/7qb2InselVw12lUmAwimkUQ00igCh2/tNxtTbLCUqffz5M85EJbCc7rkXIGZAyi5KgOJED/LBcvisViHzvSlamGxyDbJFv3lKNXe0dlodW24StDjWbItBggLjMkggpUk5U2IN0g7qFtfajOHSFvLygmEgAlS1eqhKZUs8gKd9hFSvoZg/wACHGlbltPPoUOchd/Ga50ZxrofxOEdd644bqil22YoeSpSUOhIAzpym41BBoDj2Pxdm0nAsnVxwJU+oW9BuSlmRIlRKhrFW+xtkNYVvq2gbkqWpRKluLPpLcUbqUeNDeMgWU1Hn40QmgA1BR1ZqK7B1uKOo1HdoGjD4no6WsU7ibLDipE/hACQGzwuDff2biK1OztolSRIVwuLj/cOevvo6lbqplYiFRw9kVLts6dKKmqZG2lt3MogmIJAT8TVO5tPnVjtrY/2plWU5XkE9WsWnflVxB56V5y04tKsjxIMxfQnSCdxpRi2dqlHTwkaHH7ZMjLeNaS9sEiAL1WOlCRUNjEBSuAg++1V0kuZp9hqJWVrIJgBIG4b/Gttsp/SvMMDjOqVfQ1stjYwKggyKiSKi7R6RhFSKrdpNZVTHZV7DvHxouy8TIqwdYDqSOPsO41Kwc2osmczD6muiOP14UxX9DQ1VZnQUonnQ1siuA09KiKAyCLB40qk9ZSoC2YBOFIFxfdTHwE2BCifZ3UdeJtlRIHHWfPTurreFvcXPC0A71bq67XBhnkhJbOpMbhrfupjqspiQSKmYh4CQjtK0KuG7s8BUQYQCMxudE7zRXYafcGTad1Bco+IRk1IngN1RkMlXdxJqWirxYJyvSP0SN/drPFSv+2PhXmuKOWxtyr1P9E6f9NPEq/+xQ+FKSomTwbqlFIUqgyOVw06uGgAahVQvZo+1l8gK+5ShBP6sha1Ly8M4WiY/Z33Vcmsn0i6WjD4kYYNozFrrOseeQw2RJGVKlAlRteBamk3sDL1VMJqHsHagxWHbxAQUBwE5SZiFFNjvBiQd4IqWqpYHCaCDT1Ggp0pDEo0Fw0RRoLhoGRHjWc2hiSlZSgXJknhWhxJsay615laXJ0360HVoLku9izvrBfpEYS3itBleTJG7MDBPK2W9ej7KayiDrw+dZj9IewQ8ErzEKTMcL6zysKmD986dT9J5ktZbM3W2Nx1T8xVvhyhxMpMjlqDz4VWlpTasjgNtPmk7xQlNltWds23x8Rv+tK6MPHJxttZ4Ldlo9YnNBTPnwkVtNmPiAAIrCN46cki5UNLg2OnyrY7MxRIEpIPurKaOnSkbrY6p37qvsK5BHOsxsNZArRYRJIHeawe5c0Uyk3IOs0NaTrV/jNnhRMaxI76ojarTs5njYCRTqcFD6FcMd9OibFmpVzLSpDwY9OVIkLEnVVgo8khXvmowxRX2EwUz3EnnBimpGYytRjh8uFTA6mCE9lPDervNdNpmVNDUsNoPaJzRNxZPOQR7CKivGLJVmnVQ90EWoziiqwFuAkeJg++jYZlCIIMqA9KYCfnT+gqrcgNYYgjMmxMRvPID+1GfZbTBOsWG4d8UV3GASB2idVEX4W5UFjCGMygQJFo18janfCE1yypxuFKoJIjvFhzmOdes/o3w2TCI5ieGq1n4157i2UI35rWSALc1X1rV9AelKCj7O4pKXW5hJ7OdBMpUidYnKe7mKmewnsehiu1BG1G/W9o+dOG02/W93zrKyaJtcNRRtBv1qcMc36w9tOwoMah4/Z7TwAeabcAMgLQlQB4jMDFH+1t+sK4cQj1h50WKgSkACAAANANw5VHcFSVvJ9ZPmKjOLHEeYpDAqoSdKIo0NOlIBiqA5UhVAcFAyC/Wb2s2UqDiZtr8K0r4qrxbcgg6VSRrCXS7JWzMWFAR41Z4zCB1EHhWOwjxaVl3Vp9n7RB31lKNM7U7WDCbe2VlPVuCR+FXyPGsli8KW1RIM3HPvG417XtTBt4hBSpIIIry7bnRrq1m5I5z760jOzN6fYyjrd7SDrHx/qK1vRFGKdCiG1LQ36S7Adwk9o8kz3CapH8FavRuiGIKOwkIKUIAbSbBV5UpNzKjckmbkzwpaupUaI04NSsvtnp0ArW4FuB3CsliNv4ZsguLDZKgCFWyqO7md8XgX0rYYIygEXneN9YpPdmmrNNYCKMGeArGqcm5rVbSVDSz+Ujzt8ayeU1SMkjgrqabTgKoKHUqaTSoEYXOYI38TqPjREIBsDebA2+t9UKHVp0cMcFAK/tRkY5X4kA80n4GuhxfJkpLguXApIjceH1NMQJECY91Qmtqo9cpPBQI/pU4YyUkWvvEfC1S0UmEagXAlR47vnRlvgTFydVHXw4Co7Cki86bj/SnwDu7udPPAqTeQPV71E/E0HGYdEDOkHgk386OpJoDieVJSopxsp3dmoUSQhM/up+Vda2WkCShEaHspv3fOrZB5W4aedODcmqUyegqHNmoOjaQNwAFN/wUcgOJ3VoA2APHxtwpi0k2Atwo6mHSuxm39nJHog9/HnypI2ITrmHdJ9g1rTNYXkJ56Dvp7iQBCT2t5+APCqUu5DiuDIv7NCUkZlZp/NpHHjQMLsxS7yqO/XkJNaL7NKrpKr3A3xqKa+gFIUmQoGwMW0gxedItFWp2S4UZ7EYXInKoEKOiZOZI4qPHlQ22nVAIDjsDdnXA56wKvU4LOolXeSB8KN9gGSbhoa+ssjjwFVdkuKRTdY4kWfeCRYfeOXPITAFRzjnv273/UX86kuIUtVgTwAGnKuLwuUHTmvUD8qeJ7qNxVRCc2g8P173/UX86Edovft3f51/OmrTJt4CnLw+WRPaA7R9QHcPzbqKAm7E2stDo6xxSkq7JzFRykm2vP316Hs9/gYrx9UqMJHIDlz+dbvoxtAqbAJlSLEn8Q3K7tR4VjqR5Orw+pXunp2z8SDrrUHpHhAtMxVVhMZcXtV8XQpMVytUzt3MOMFPdV1s7ApIiLe48RGh51ZfYRGlScLh4ocrQkqM9/lJ1eNQ+XAtASrLnmUKUq5PrGDAPIcK9U2c1kbSkaJAA8BWeYVFaLCKlM0ObaSfBzz01G2uSNttUMnvHvFZua0W20SyeUH21m0xUoa2OgV2a5HjSmqFhnMtKnZqVAHlCiDQHZFqVKvQOIaVWveuCBcdk/lJFKlSpDsM1tFwfiBH5h8RepadsaZk25GR4A0qVZtI0TZLYxaVeifC4/pRW0KOnCu0qiSplp4DoR2Z+udJKJ0rtKpkVF2Pfm3dSZG4b9YrlKi8jrAZ68JAgbhRWMOBvkjjXaVWjJ7ER5uFGDflz1oSWRqr0R9RSpUJZG3hCQ0lIkzBulMyPH561GLZcUd3GLDypUqvmiFtYRzDhNhaIzEQDGsaXnwqnx8rhKQEoFgPoUqVVZNDUYAJlKT2olavVGvZG8+6qXEJ6xQbbECbAxfmTXaVWQDXhkoRmmwkGJ7SgfR7p140bo0+pL4UrRfYj3HwPvpUqmWxUcM3LLsGrjC4gcaVKuVnoo0OHgoFIiKVKsDQJhxJHOtHhFdilSpGepsA2ndpf7prKzFKlTiQxwXTgqlSqyBhPL2mlSpUUFn/2Q=="
                  alt="Our Story"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-800 mb-6">
                GrantWriter was founded by a team of grant writing professionals and AI experts who recognized the challenges organizations face in securing funding. We saw firsthand how time-consuming and complex the grant writing process can be, and we knew there had to be a better way.
              </p>
              <p className="text-gray-800">
                Today, we're proud to serve thousands of organizations across the globe, helping them secure the funding they need to make a difference in their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Start using GrantWriter today and transform your grant writing process.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-hover transition-colors duration-200"
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 