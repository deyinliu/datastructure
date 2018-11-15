#include "iostream"
#include "./main/base.h"

using namespace std;
template <class T>
void Rank(T &a , int r[]){
    
    for(int i = 0; i < count(a); i++)
    {
        r[i] = 0;
    }
    
    for(int i = 1; i < count(a); i++)
    {
        for(int j = 0; j < i; j++){
            if(a[j]>=a[i]){
                r[j]++;
            }else{
                r[i]++;
            }
        }
    }
    
}
template <class T>
void reArrange(T &a , int rank[]){
    
    for(int i = 0; i < count(a); i++)
    {
        while(rank[i]!=i){
            int t = rank[i];
            std::swap(a[i] , a[t]);
            std::swap(rank[i] , rank[t]);
        }
    }
    
}
int main(int argc, char const *argv[])
{
    int a[] = {1,4,3,8,9,3,5,4,4};
    int r[count(a)];
    Rank(a , r);
    reArrange(a , r);
    print(a);
    return 0;
}
