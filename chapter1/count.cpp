#include "iostream"
template <class Array>
int count(const Array& array){
    return (sizeof(array) / sizeof(array[0])); 
}

int main(int argc, char const *argv[])
{
    int arr[] = {1,2,3,4,5,6,7,8};
    printf("%d\n",count(arr));
    return 0;
}
