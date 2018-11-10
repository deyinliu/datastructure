#include "iostream"
#include "typeinfo"
template <class T>
int count(const T& array){
    return sizeof(array)/sizeof(array[0]);
}

int count(int x){
    return 1;
}
int main(int argc, char const *argv[])
{
    int arr[] = {1,2,3,4,5,6,7,8};
    // int arr = 7;
    printf("%d\n",count(arr));
    return 0;
}
