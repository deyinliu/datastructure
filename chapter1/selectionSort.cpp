#include "iostream"
#include "./main/base.h"
using namespace std;

template <class T>
void selectionSort(T &a){
    int n = count(a);
    bool isSort = false;
    for(int i = 0; i < n && !isSort; i++)
    {
        int maxIndex = 0;
        isSort = true;
        for(int j = 1;j<n-i;j++){
            if (a[j]>a[maxIndex]) {
               maxIndex = j;
            }else{
                isSort = false;
            }
        }
        std::swap(a[maxIndex] , a[n-i-1]);
    }
}

int main(int argc, char const *argv[])
{
    float a[] = {1,2,3,3,5,6};
    int len = count(a);
    selectionSort(a);
    print(a);
    
    return 0;
}
